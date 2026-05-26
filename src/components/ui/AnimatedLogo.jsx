// ============================================================
// components/ui/AnimatedLogo.jsx
// Pixel-accurate replica of the One System brand mark + animated
// border trace. Derived from the official SVG geometry.
// ============================================================

import { useId } from 'react';

/**
 * Normalized mark geometry (derived from official SVG, 44×44 viewBox):
 *
 * The "1" is formed by a white L-shape within a solid black box.
 *
 * L-shape path (white):
 *   M 22,42  → bottom of stem (right)
 *   L 40,42  → bottom-right corner
 *   L 40, 2  → top-right corner
 *   L 15, 2  → top of serif/flag (left)
 *   L 15,14  → where flag meets stem
 *   L 22,14  → top of narrow stem
 *   Z
 *
 * Small dot (white): x=9 y=37 w=6 h=5
 *
 * Outer box: 0,0 → 44,44 (solid fill = ink colour)
 * Animated stroke: 1,1 → 42,42 (white, dashoffset loop)
 */
export default function AnimatedLogo({ inverted = false }) {
  const id  = useId().replace(/[^a-z0-9]/gi, '');
  const ink    = inverted ? '#ffffff' : '#000000';
  const paper  = inverted ? '#000000' : '#ffffff';
  const PERIM  = 168; // perimeter of the inner 42×42 stroke rect

  return (
    <>
      <style>{`
        @keyframes os-trace-${id} {
          0%   { stroke-dashoffset: ${PERIM}; opacity: 0.55; }
          55%  { stroke-dashoffset: 0;        opacity: 1;    }
          75%  { stroke-dashoffset: 0;        opacity: 0.90; }
          95%  { stroke-dashoffset: 0;        opacity: 0.40; }
          100% { stroke-dashoffset: ${PERIM}; opacity: 0.55; }
        }
      `}</style>

      {/*
        viewBox: 0 0 180 44
          Mark:  0 → 44 (square)
          Gap:   44 → 58
          Text:  58 → 180
      */}
      <svg
        width="180"
        height="44"
        viewBox="0 0 180 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="One System"
        role="img"
      >
        {/* ── Solid box (background) ── */}
        <rect x="0" y="0" width="44" height="44" fill={ink} />

        {/* ── White "1" L-shape ── */}
        <path
          d="M 22,42 L 40,42 L 40,2 L 15,2 L 15,14 L 22,14 Z"
          fill={paper}
        />

        {/* ── White dot (bottom-left detail) ── */}
        <rect x="9" y="37" width="6" height="5" fill={paper} />

        {/* ── Animated border trace ── */}
        <rect
          x="1" y="1" width="42" height="42"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.2"
          strokeDasharray={PERIM}
          style={{
            animation: `os-trace-${id} 3.8s cubic-bezier(0.4,0,0.2,1) infinite`,
          }}
        />

        {/* ── "One" ── */}
        <text
          x="58" y="22"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="21"
          fill={ink}
        >
          One
        </text>

        {/* ── "System" ── */}
        <text
          x="58" y="42"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="19"
          fill={ink}
        >
          System
        </text>
      </svg>
    </>
  );
}
