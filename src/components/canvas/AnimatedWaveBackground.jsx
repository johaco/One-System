// ============================================================
// components/canvas/AnimatedWaveBackground.jsx  — SRP
// Full-bleed canvas wave. Always dark theme (black bg, white lines).
// ============================================================

import { useRef } from 'react';
import { useWaveAnimation } from '../../hooks/useWaveAnimation';

export default function AnimatedWaveBackground() {
  const canvasRef = useRef(null);
  useWaveAnimation(canvasRef, 'dark');

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}
