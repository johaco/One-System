import { useState, useCallback } from 'react';
import { NAV_LINKS } from '../../constants';
import Button from '../ui/Button';
import AnimatedLogo from '../ui/AnimatedLogo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = useCallback(() => setMenuOpen(false), []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: '#f9f9f9',
      borderBottom: '2px solid #000',
      width: '100%',
      /* Force GPU layer so it doesn't repaint on scroll */
      transform: 'translateZ(0)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '72px',
      }}>
        <a href="#" aria-label="One System inicio" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <AnimatedLogo inverted={false} />
        </a>

        {/* Desktop */}
        <div className="os-desktop-nav" style={{ display: 'none', gap: '32px', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="label-sm"
              style={{ color: '#5d5f5f', transition: 'color 150ms ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5d5f5f')}
            >{link.label}</a>
          ))}
        </div>
        <div className="os-desktop-nav" style={{ display: 'none' }}>
          <Button href="#contacto" variant="primary">Empezá tu proyecto</Button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen((v) => !v)} className="os-mobile-btn"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', lineHeight: 1 }}>
          <span className="material-symbols-outlined" style={{ fontSize: '28px', display: 'block' }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#f9f9f9', borderTop: '1px solid #000',
          padding: '20px 20px 28px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="label-sm"
              onClick={close} style={{ color: '#1b1b1b', padding: '4px 0' }}>
              {link.label}
            </a>
          ))}
          <Button href="#contacto" variant="primary" onClick={close} style={{ marginTop: '4px' }}>
            Empezá tu proyecto
          </Button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .os-desktop-nav { display: flex !important; }
          .os-mobile-btn  { display: none  !important; }
        }
        @media (max-width: 767px) { .os-desktop-nav { display: none; } }
      `}</style>
    </nav>
  );
}
