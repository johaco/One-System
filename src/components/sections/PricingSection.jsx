// ============================================================
// PricingSection.jsx — Plan único 100% personalizable
// ============================================================
import { useState } from 'react';
import { SINGLE_PLAN, BILLING_PERIODS } from '../../constants';
import Button from '../ui/Button';

function formatARS(n) {
  return '$' + Math.round(n).toLocaleString('es-AR');
}

const iconStyle = {
  fontFamily: 'Material Symbols Outlined',
  fontSize: '16px', fontWeight: 100,
  fontStyle: 'normal', lineHeight: 1, flexShrink: 0,
};

export default function PricingSection({ onSelectPlan }) {
  const [period, setPeriod] = useState('monthly');
  const selected = BILLING_PERIODS.find(b => b.id === period);

  const monthly   = SINGLE_PLAN.basePrice * (1 - selected.discount);
  const total     = monthly * selected.months;
  const saved     = SINGLE_PLAN.basePrice * selected.months - total;

  return (
    <section id="inversion" style={{
      backgroundColor: '#000',
      color: '#fff',
      paddingTop: 'var(--section-padding)',
      paddingBottom: 'var(--section-padding)',
    }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ marginBottom: '56px' }}>
          <p className="label-sm" style={{ color: '#555', marginBottom: '12px' }}>
            [ 03 / Inversión ]
          </p>
          <h2 style={{
            fontSize: 'clamp(28px,4vw,60px)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Un solo plan.<br />Infinitas posibilidades.
          </h2>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '52ch', lineHeight: 1.7 }}>
            No cobramos por funcionalidades separadas. Vos nos contás qué necesita tu negocio
            y nosotros lo construimos. Todo incluido, sin sorpresas.
          </p>
        </div>

        {/* ── Main card ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '0',
          border: '1px solid rgba(255,255,255,0.15)',
        }}>

          {/* LEFT — price + toggle */}
          <div style={{
            padding: '48px 40px',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            gap: '40px',
          }}>
            <div>
              {/* Plan name */}
              <p className="label-sm" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>
                Plan único
              </p>
              <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
                {SINGLE_PLAN.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6, marginBottom: '40px' }}>
                {SINGLE_PLAN.tagline}
              </p>

              {/* Billing toggle */}
              <div style={{ marginBottom: '32px' }}>
                <p className="label-sm" style={{ color: '#444', marginBottom: '12px' }}>
                  Período de facturación
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {BILLING_PERIODS.map(bp => {
                    const active = bp.id === period;
                    const mo = SINGLE_PLAN.basePrice * (1 - bp.discount);
                    return (
                      <button
                        key={bp.id}
                        onClick={() => setPeriod(bp.id)}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '14px 18px',
                          border: active ? '1px solid #fff' : '1px solid rgba(255,255,255,0.12)',
                          background: active ? '#fff' : 'transparent',
                          color: active ? '#000' : '#888',
                          cursor: 'pointer', fontFamily: 'inherit',
                          transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
                          minHeight: '48px', touchAction: 'manipulation',
                          textAlign: 'left',
                        }}
                      >
                        <span style={{ fontSize: '13px', fontWeight: active ? 700 : 400 }}>
                          {bp.label}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 700 }}>
                            {formatARS(mo)}/mes
                          </span>
                          {bp.badge && (
                            <span style={{
                              fontSize: '9px', fontWeight: 700,
                              letterSpacing: '0.06em',
                              background: active ? '#000' : 'rgba(255,255,255,0.08)',
                              color: active ? '#fff' : '#888',
                              padding: '2px 8px',
                            }}>
                              {bp.badge}
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price display */}
              <div style={{
                padding: '24px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
              }}>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1 }}>
                    {formatARS(monthly)}
                  </span>
                  <span style={{ fontSize: '15px', color: '#666', marginLeft: '6px' }}>/mes</span>
                </div>
                {selected.months > 1 && (
                  <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>
                    {formatARS(total)} facturado {selected.label.toLowerCase()}
                  </p>
                )}
                {saved > 0 && (
                  <div style={{
                    display: 'inline-block', marginTop: '10px',
                    fontSize: '12px', fontWeight: 700,
                    color: '#fff', background: '#000',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '4px 12px', letterSpacing: '0.04em',
                  }}>
                    Ahorrás {formatARS(saved)}
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <Button
              href="#contacto"
              variant="primaryOnDark"
              onClick={() => onSelectPlan?.(SINGLE_PLAN.title)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Personalizar mi sitio
            </Button>

            <p style={{ fontSize: '12px', color: '#333', textAlign: 'center', marginTop: '-24px' }}>
              * Precios en ARS. IVA no incluido. Cancelación en cualquier momento.
            </p>
          </div>

          {/* RIGHT — features */}
          <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Always included */}
            <div>
              <p className="label-sm" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
                Siempre incluido
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {SINGLE_PLAN.included.map(f => (
                  <li key={f.text} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    fontSize: '14px', color: '#fff',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <span className="material-symbols-outlined" style={{ ...iconStyle, color: '#fff' }}>
                      {f.icon}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Customizable */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <p className="label-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Elegís según tu negocio
                </p>
                <span style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#888', padding: '3px 10px',
                }}>
                  A MEDIDA
                </span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '8px',
              }}>
                {SINGLE_PLAN.customizable.map(f => (
                  <div key={f.text} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 12px',
                    border: '1px solid rgba(255,255,255,0.07)',
                    fontSize: '13px', color: '#888',
                  }}>
                    <span className="material-symbols-outlined" style={{ ...iconStyle, color: '#555' }}>
                      {f.icon}
                    </span>
                    {f.text}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '16px', fontSize: '13px', color: '#444', fontStyle: 'italic' }}>
                + Cualquier otra funcionalidad que necesites. Consultanos.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
