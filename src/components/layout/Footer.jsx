// ============================================================
// components/layout/Footer.jsx  — SRP
// ============================================================

import { FOOTER_LINKS, SOCIAL_LINKS } from '../../constants';
import AnimatedLogo from '../ui/AnimatedLogo';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <div
        className="container"
        style={{ paddingTop: '72px', paddingBottom: '72px' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>
          {/* Brand col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <AnimatedLogo inverted />
            <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: 1.6 }}>
              Soluciones web para emprendedores.<br />
              Claridad absoluta en cada línea de código.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '40px', height: '40px',
                    border: '1px solid rgba(255,255,255,0.20)',
                    transition: 'border-color 200ms ease, background 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: '#4a4a4a' }}>
              © {new Date().getFullYear()} One System. Absolute Clarity.
            </p>
          </div>

          {/* Links col */}
          <div>
            <p className="label-sm" style={{ color: '#4a4a4a', marginBottom: '20px' }}>Navegación</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: '15px', color: '#7a7a7a', transition: 'color 200ms ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#7a7a7a')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
