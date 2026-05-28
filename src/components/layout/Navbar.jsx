import { useState, useCallback, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';
import Button from '../ui/Button';
import AnimatedLogo from '../ui/AnimatedLogo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const close = useCallback(() => setMenuOpen(false), []);
  useEffect(() => {
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

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
              style={{
                color: activeSection === link.href.replace('#', '')
                  ? '#000'
                  : '#5d5f5f',

                fontWeight: activeSection === link.href.replace('#', '')
                  ? 700
                  : 500,

                transition: 'all 150ms ease',
              }}
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
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', lineHeight: 1, position: 'relative', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Menu icon — fades out and rotates away when open */}
          <span className="material-symbols-outlined" style={{
            fontSize: '28px',
            display: 'block',
            color: '#000',
            position: 'absolute',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
            transform: menuOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
            opacity: menuOpen ? 0 : 1,
            pointerEvents: 'none',
          }}>menu</span>
          {/* Close icon — fades in and rotates into place when open */}
          <span className="material-symbols-outlined" style={{
            fontSize: '28px',
            display: 'block',
            color: '#000',
            position: 'absolute',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
            transform: menuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
            opacity: menuOpen ? 1 : 0,
            pointerEvents: 'none',
          }}>close</span>
        </button>
      </div>

      {/* Mobile menu — always rendered, animated with max-height + opacity */}
      <div style={{
        backgroundColor: '#f9f9f9',
        borderTop: menuOpen ? '1px solid #000' : '1px solid transparent',
        maxHeight: menuOpen ? '500px' : '0px',
        overflow: 'hidden',
        opacity: menuOpen ? 1 : 0,
        transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, border-color 0.3s ease',
      }}>
        <div style={{
          padding: '20px 20px 28px',
          display: 'flex', flexDirection: 'column', gap: '20px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
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
      </div>

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
