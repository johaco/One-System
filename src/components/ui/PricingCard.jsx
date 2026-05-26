// ============================================================
// components/ui/PricingCard.jsx — SRP + ISP
// Renders a single plan card. Price calculated externally.
// ============================================================
import { useState } from 'react';

function formatARS(n) {
  return '$' + Math.round(n).toLocaleString('es-AR');
}

const iconStyle = {
  fontFamily: 'Material Symbols Outlined',
  fontSize: '15px', fontWeight: 100,
  fontStyle: 'normal', lineHeight: 1, flexShrink: 0,
};

export default function PricingCard({
  title, basePrice, highlighted, tag,
  features, onSelectPlan, discount, billingLabel, monthsCount,
}) {
  const [hovered, setHovered] = useState(false);

  const finalMonthly = basePrice * (1 - discount);
  const totalPrice   = finalMonthly * monthsCount;
  const savedAmount  = basePrice * monthsCount - totalPrice;

  // Visual state
  const active = highlighted && !hovered;
  const bgColor = highlighted
    ? (hovered ? '#111' : '#fff')
    : (hovered ? '#181818' : '#0d0d0d');
  const fgColor = highlighted && !hovered ? '#000' : '#fff';
  const borderC = highlighted
    ? (hovered ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.12)')
    : 'rgba(255,255,255,0.12)';
  const mutedC  = highlighted && !hovered ? '#666' : '#888';

  return (
    <div
      style={{
        border: `1px solid ${borderC}`,
        display: 'flex', flexDirection: 'column',
        backgroundColor: bgColor, color: fgColor,
        transition: 'background-color 180ms ease, color 180ms ease',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tag badge */}
      {tag && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          backgroundColor: '#000', color: '#fff',
          fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '6px 14px',
        }}>{tag}</div>
      )}

      {/* Card body */}
      <div style={{ padding: '28px 28px 24px' }}>
        {/* Title */}
        <h4 style={{
          fontSize: '20px', fontWeight: 700,
          letterSpacing: '-0.01em', marginBottom: '20px',
          paddingRight: tag ? '80px' : 0,
        }}>{title}</h4>

        {/* Price block */}
        <div style={{ marginBottom: '4px' }}>
          <span style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1 }}>
            {formatARS(finalMonthly)}
          </span>
          <span style={{ fontSize: '14px', color: mutedC, marginLeft: '4px' }}>/mes</span>
        </div>

        {/* Billing detail */}
        <p style={{ fontSize: '13px', color: mutedC, marginBottom: '6px' }}>
          {monthsCount > 1
            ? `${formatARS(totalPrice)} facturado ${billingLabel.toLowerCase()}`
            : 'Facturación mensual'}
        </p>

        {/* Savings badge */}
        {savedAmount > 0 && (
          <div style={{
            display: 'inline-block',
            backgroundColor: fgColor === '#000' ? '#000' : 'rgba(255,255,255,0.1)',
            color: fgColor === '#000' ? '#fff' : '#fff',
            fontSize: '11px', fontWeight: 700,
            padding: '3px 10px', letterSpacing: '0.06em',
            marginBottom: '4px',
          }}>
            Ahorrás {formatARS(savedAmount)}
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: highlighted && !hovered ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)', marginInline: '28px' }} />

      {/* Features */}
      <ul style={{
        listStyle: 'none', padding: '20px 28px',
        display: 'flex', flexDirection: 'column', gap: '10px',
        flexGrow: 1,
      }}>
        {features.map((f) => (
          <li key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', lineHeight: '20px' }}>
            <span className="material-symbols-outlined" style={{ ...iconStyle, color: mutedC }}>{f.icon}</span>
            <span>{f.text}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div style={{ padding: '0 28px 28px' }}>
        <button
          onClick={() => onSelectPlan?.(title)}
          style={{
            width: '100%', padding: '13px 20px',
            fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            fontFamily: 'inherit', cursor: 'pointer',
            border: `2px solid ${fgColor === '#000' ? '#000' : 'rgba(255,255,255,0.5)'}`,
            backgroundColor: highlighted && !hovered ? '#000' : 'transparent',
            color: highlighted && !hovered ? '#fff' : fgColor,
            transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease',
            minHeight: '48px', touchAction: 'manipulation',
          }}
        >
          Elegir este plan
        </button>
      </div>
    </div>
  );
}
