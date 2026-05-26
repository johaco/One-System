// ============================================================
// hooks/useWaveAnimation.js — optimised for mobile
// ============================================================

import { useEffect, useRef } from 'react';

// ── Noise ────────────────────────────────────────────────────
function noise(t, s) {
  return (
    Math.sin(t * 1.10 + s * 0.70) * 0.50 +
    Math.sin(t * 2.30 + s * 1.30) * 0.30 +
    Math.sin(t * 0.50 + s * 2.10) * 0.20
  );
}

// ── Centerline S-curve that always spans the full canvas ─────
function centerPt(u, W, H, t) {
  const p = t * 0.22;
  return {
    x: W * (-0.05 + 1.10 * u),
    y:
      H * 0.50 +
      H * 0.32 * Math.sin(u * Math.PI * 1.90 + p) +
      H * 0.12 * Math.sin(u * Math.PI * 3.80 - p * 1.50) +
      H * 0.06 * noise(u * 4 + p * 0.8, 2),
  };
}

// ── Unit normal at u (finite difference) ─────────────────────
function normal(u, W, H, t) {
  const e = 0.004;
  const a = centerPt(Math.max(0, u - e), W, H, t);
  const b = centerPt(Math.min(1, u + e), W, H, t);
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  return { nx: -dy / len, ny: dx / len };
}

// ── Draw a single strand ──────────────────────────────────────
function drawStrand(ctx, i, total, W, H, t, lineRgb, segs) {
  const frac   = i / (total - 1);
  const rel    = (frac - 0.5) * 2;
  const halfW  = Math.min(W, H) * 0.22;
  const offset = rel * halfW;
  const phaseOff = frac * Math.PI * 2.0;
  const fade   = Math.pow(1 - Math.abs(rel), 1.80);
  const alpha  = fade * 0.80;

  ctx.beginPath();
  for (let s = 0; s <= segs; s++) {
    const u = s / segs;
    const c = centerPt(u, W, H, t);
    const n = normal(u, W, H, t);
    const breathe = 1 + 0.20 * Math.sin(u * Math.PI * 2.5 + t * 0.85 + phaseOff);
    const d  = offset * breathe;
    const px = c.x + n.nx * d;
    const py = c.y + n.ny * d;
    s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.strokeStyle = `rgba(${lineRgb},${alpha.toFixed(3)})`;
  ctx.lineWidth = 0.55;
  ctx.stroke();
}

// ── Device tier detection ─────────────────────────────────────
function getDeviceTier() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  // navigator.hardwareConcurrency = logical CPU cores (not available on all browsers)
  const cores = navigator.hardwareConcurrency || 4;

  if (isMobile && cores <= 4) return 'low';
  if (isMobile) return 'mid';
  return 'high';
}

const TIER_CONFIG = {
  low:  { strands: 40,  segs: 60,  speed: 0.005, dpr: 1    },
  mid:  { strands: 60,  segs: 90,  speed: 0.006, dpr: 1    },
  high: { strands: 100, segs: 140, speed: 0.006, dpr: null },  // null = use real dpr
};

// ── Hook ──────────────────────────────────────────────────────
export function useWaveAnimation(canvasRef, theme = 'dark') {
  const rafRef      = useRef(null);
  const tRef        = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });  // alpha:false → faster compositing
    const BG  = theme === 'dark' ? '#000000' : '#f9f9f9';
    const RGB = theme === 'dark' ? '255,255,255' : '30,30,30';

    const tier   = getDeviceTier();
    const config = TIER_CONFIG[tier];
    const dpr    = config.dpr ?? Math.min(window.devicePixelRatio || 1, 2);

    // ── Resize ────────────────────────────────────────────────
    function resize() {
      const parent = canvas.parentElement || document.body;
      const W = parent.clientWidth;
      const H = parent.clientHeight;
      if (!W || !H) return;

      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width  = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // ── Render loop ───────────────────────────────────────────
    let lastTs = 0;
    const MIN_INTERVAL = 1000 / 50; // cap at 50fps on low-tier

    function render(ts) {
      rafRef.current = requestAnimationFrame(render);

      // Throttle on low/mid tiers
      if (tier !== 'high' && ts - lastTs < MIN_INTERVAL) return;
      lastTs = ts;

      const W = canvas.width  / dpr;
      const H = canvas.height / dpr;

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);

      const { strands, segs } = config;
      for (let i = 0; i < strands; i++) {
        drawStrand(ctx, i, strands, W, H, tRef.current, RGB, segs);
      }

      tRef.current += config.speed;
    }

    // ── ResizeObserver (debounced to avoid thrash) ────────────
    let resizeTimer = null;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    });
    ro.observe(canvas.parentElement || document.body);

    // ── Visibility — pause when tab hidden ───────────────────
    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
      } else {
        lastTs = 0;
        rafRef.current = requestAnimationFrame(render);
      }
    }
    document.addEventListener('visibilitychange', onVisibility);

    resize();
    rafRef.current = requestAnimationFrame(render);

    return () => {
      clearTimeout(resizeTimer);
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      cancelAnimationFrame(rafRef.current);
    };
  }, [canvasRef, theme]);
}
