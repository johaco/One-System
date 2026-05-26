import { useState } from 'react';

export default function ServiceCard({ icon, title, description }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        border: '1px solid #000',
        padding: '32px 28px',
        backgroundColor: hovered ? '#000' : '#fff',
        color: hovered ? '#fff' : '#1b1b1b',
        /* GPU-composited transition */
        transition: 'background-color 180ms ease, color 180ms ease',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="material-symbols-outlined" style={{
        fontSize: '36px', marginBottom: '20px', display: 'block',
        fontFamily: 'Material Symbols Outlined', fontWeight: 100,
        fontStyle: 'normal', lineHeight: 1,
      }}>{icon}</span>
      <h4 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '12px' }}>
        {title}
      </h4>
      <p style={{ fontSize: '15px', lineHeight: '23px', color: hovered ? '#c6c6c7' : '#5d5f5f', transition: 'color 180ms ease' }}>
        {description}
      </p>
    </div>
  );
}
