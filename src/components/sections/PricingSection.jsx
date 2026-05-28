// ============================================================
// components/sections/PricingSection.jsx — SRP + OCP
// Billing period toggle + plan grid.
// ============================================================
import { useState } from 'react';
import { PRICING_PLANS, BILLING_PERIODS } from '../../constants';
import PricingCard from '../ui/PricingCard';

const MONTHS = { monthly: 1, biannual: 6, annual: 12 };

export default function PricingSection({ onSelectPlan }) {
  const [period, setPeriod] = useState('monthly');
  const selected = BILLING_PERIODS.find((b) => b.id === period);

  return (
    <section id="inversion" style={{
      backgroundColor: '#000', color: '#fff',
      paddingTop: 'var(--section-padding)',
      paddingBottom: 'var(--section-padding)',
    }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ marginBottom: '48px' }}>
          <p className="label-sm" style={{ color: '#555', marginBottom: '12px' }}>
            [ 03 / Inversión ]
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 60px)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Claridad absoluta.
          </h2>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '50ch' }}>
            Todos los planes incluyen hosting, dominio, soporte técnico y actualizaciones de contenido.
          </p>
        </div>

        {/* ── Billing toggle ── */}
        <div style={{
          display: 'flex',
          width: '100%',
          border: '1px solid rgba(255,255,255,0.15)',
          marginBottom: '40px',
          overflow: 'hidden',
        }}>          {BILLING_PERIODS.map((bp) => {
            const active = bp.id === period;
            return (
              <button
                key={bp.id}
                onClick={() => setPeriod(bp.id)}
                style={{
                  flex: 1,
                  padding: '10px 8px',
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  fontFamily: 'inherit', cursor: 'pointer',
                  border: 'none',
                  borderRight: '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: active ? '#fff' : 'transparent',
                  color: active ? '#000' : '#666',
                  transition: 'background-color 150ms ease, color 150ms ease',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexWrap: 'wrap', gap: '4px',
                  minHeight: '52px', touchAction: 'manipulation',
                  textAlign: 'center',
                }}
              >
                {bp.label}
                {bp.badge && (
                  <span style={{
                    fontSize: '9px', fontWeight: 700,
                    backgroundColor: active ? '#000' : 'rgba(255,255,255,0.12)',
                    color: active ? '#fff' : '#aaa',
                    padding: '2px 5px',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}>{bp.badge}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          alignItems: 'stretch',
        }}>
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
              discount={selected.discount}
              billingLabel={selected.label}
              monthsCount={MONTHS[period]}
              onSelectPlan={onSelectPlan}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <p style={{
          marginTop: '28px', fontSize: '13px',
          color: '#444', textAlign: 'center',
        }}>
          * Precios en pesos argentinos. Podés cancelar en cualquier momento.
        </p>

      </div>
    </section>
  );
}
