import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { NAV_LINKS } from '../../constants';
import Button from '../ui/Button';
import AnimatedLogo from '../ui/AnimatedLogo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const close = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) =>
      link.href.replace('#', ''),
    );

    let animationFrameId;

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        /*
         * La barra mide 72 px.
         * Este valor permite cambiar la opción activa un poco
         * después de que la sección entra en pantalla.
         */
        const activationPoint = 150;

        let currentSection = '';

        sectionIds.forEach((sectionId) => {
          const section = document.getElementById(sectionId);

          if (!section) {
            return;
          }

          const sectionTop =
            section.getBoundingClientRect().top;

          if (sectionTop <= activationPoint) {
            currentSection = sectionId;
          }
        });

        /*
         * Al llegar al final de la página, se marca Contacto.
         */
        const reachedPageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 5;

        if (reachedPageBottom) {
          currentSection =
            sectionIds[sectionIds.length - 1] ?? '';
        }

        setActiveSection(currentSection);
      });
    };

    updateActiveSection();

    window.addEventListener(
      'scroll',
      updateActiveSection,
      { passive: true },
    );

    window.addEventListener(
      'resize',
      updateActiveSection,
    );

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        'scroll',
        updateActiveSection,
      );

      window.removeEventListener(
        'resize',
        updateActiveSection,
      );
    };
  }, []);

  const getSectionId = (href) =>
    href.replace('#', '');

  const handleLinkClick = (href) => {
    setActiveSection(getSectionId(href));
    close();
  };

  const getLinkStyle = (href, isMobile = false) => {
    const sectionId = getSectionId(href);
    const isActive = activeSection === sectionId;

    return {
      color: isActive ? '#000' : '#5d5f5f',
      fontWeight: isActive ? 800 : 600,
      padding: isMobile ? '4px 0' : '8px 0',
      transition:
        'color 150ms ease, font-weight 150ms ease',
    };
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: '#f9f9f9',
        borderBottom: '2px solid #000',
        transform: 'translateZ(0)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        <a
          href="#"
          aria-label="One System inicio"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
          onClick={() => setActiveSection('')}
        >
          <AnimatedLogo inverted={false} />
        </a>

        {/* Navegación de escritorio */}
        <div
          className="os-desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {NAV_LINKS.map((link) => {
            const sectionId = getSectionId(link.href);
            const isActive =
              activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className="label-sm os-nav-link"
                style={getLinkStyle(link.href)}
                aria-current={
                  isActive ? 'location' : undefined
                }
                onClick={() =>
                  handleLinkClick(link.href)
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div
          className="os-desktop-nav"
          style={{ display: 'none' }}
        >
          <Button
            href="#contacto"
            variant="primary"
            onClick={() =>
              setActiveSection('contacto')
            }
          >
            Empezá tu proyecto
          </Button>
        </div>

        {/* Botón del menú móvil */}
        <button
          type="button"
          className="os-mobile-btn"
          aria-label={
            menuOpen
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((currentValue) => !currentValue)
          }
          style={{
            padding: '8px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              display: 'block',
              fontSize: '28px',
            }}
          >
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Navegación móvil */}
      {menuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px 20px 28px',
            backgroundColor: '#f9f9f9',
            borderTop: '1px solid #000',
          }}
        >
          {NAV_LINKS.map((link) => {
            const sectionId = getSectionId(link.href);
            const isActive =
              activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className="label-sm os-nav-link"
                style={getLinkStyle(
                  link.href,
                  true,
                )}
                aria-current={
                  isActive ? 'location' : undefined
                }
                onClick={() =>
                  handleLinkClick(link.href)
                }
              >
                {link.label}
              </a>
            );
          })}

          <Button
            href="#contacto"
            variant="primary"
            onClick={() => {
              setActiveSection('contacto');
              close();
            }}
            style={{ marginTop: '4px' }}
          >
            Empezá tu proyecto
          </Button>
        </div>
      )}

      <style>{`
        .os-nav-link:hover {
          color: #000 !important;
        }

        @media (min-width: 768px) {
          .os-desktop-nav {
            display: flex !important;
          }

          .os-mobile-btn {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .os-desktop-nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}