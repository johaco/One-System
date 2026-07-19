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
        'color 180ms ease, font-weight 180ms ease',
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
          className={`os-mobile-btn ${
            menuOpen ? 'is-open' : ''
          }`}
          aria-label={
            menuOpen
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (currentValue) => !currentValue,
            )
          }
        >
          <span className="os-menu-icon">
            <span className="os-menu-line os-menu-line-1" />
            <span className="os-menu-line os-menu-line-2" />
            <span className="os-menu-line os-menu-line-3" />
          </span>
        </button>
      </div>

      {/* Navegación móvil */}
      <div
        className={`os-mobile-menu ${
          menuOpen ? 'is-open' : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="os-mobile-menu__content">
          {NAV_LINKS.map((link, index) => {
            const sectionId = getSectionId(link.href);
            const isActive =
              activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className="label-sm os-nav-link os-mobile-menu__item"
                style={{
                  ...getLinkStyle(
                    link.href,
                    true,
                  ),
                  transitionDelay: menuOpen
                    ? `${300 + index * 120}ms`
                    : '0ms',
                }}
                aria-current={
                  isActive ? 'location' : undefined
                }
                tabIndex={menuOpen ? 0 : -1}
                onClick={() =>
                  handleLinkClick(link.href)
                }
              >
                {link.label}
              </a>
            );
          })}

          <div
            className="os-mobile-menu__item"
            style={{
              transitionDelay: menuOpen
                ? `${300 + NAV_LINKS.length * 120}ms`
                : '0ms',
            }}
          >
            <Button
              href="#contacto"
              variant="primary"
              onClick={() => {
                setActiveSection('contacto');
                close();
              }}
              style={{
                width: '100%',
                marginTop: '4px',
              }}
            >
              Empezá tu proyecto
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .os-nav-link:hover {
          color: #000 !important;
        }

        /* =========================
           BOTÓN DEL MENÚ MÓVIL
        ========================= */

        .os-mobile-btn {
          position: relative;

          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          border: none;
          background: transparent;

          color: #000;
          cursor: pointer;

          -webkit-tap-highlight-color: transparent;
        }

        .os-menu-icon {
          position: relative;

          display: block;

          width: 28px;
          height: 20px;
        }

        .os-menu-line {
          position: absolute;
          left: 0;

          width: 100%;
          height: 2px;

          background-color: #000;

          transform-origin: center;

          transition:
            top 480ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 300ms ease;
        }

        .os-menu-line-1 {
          top: 0;
        }

        .os-menu-line-2 {
          top: 9px;
        }

        .os-menu-line-3 {
          top: 18px;
        }

        .os-mobile-btn.is-open .os-menu-line-1 {
          top: 9px;
          transform: rotate(45deg);
        }

        .os-mobile-btn.is-open .os-menu-line-2 {
          opacity: 0;
          transform: scaleX(0.3);
        }

        .os-mobile-btn.is-open .os-menu-line-3 {
          top: 9px;
          transform: rotate(-45deg);
        }

        /* =========================
           MENÚ DESPLEGABLE
        ========================= */

        .os-mobile-menu {
          max-height: 0;

          overflow: hidden;

          opacity: 0;

          transform:
            translateY(-18px)
            scaleY(0.97);

          transform-origin: top;

          visibility: hidden;

          background-color: #f9f9f9;

          border-top: 1px solid transparent;

          transition:
            max-height 850ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 500ms ease,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0s linear 850ms,
            border-color 400ms ease;
        }

        .os-mobile-menu.is-open {
          max-height: 600px;

          opacity: 1;

          transform:
            translateY(0)
            scaleY(1);

          visibility: visible;

          border-top-color: #000;

          transition:
            max-height 850ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 500ms ease,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0s linear 0s,
            border-color 400ms ease;
        }

        .os-mobile-menu__content {
          display: flex;
          flex-direction: column;

          gap: 20px;

          padding: 24px 20px 30px;
        }

        /* =========================
           APARICIÓN DE OPCIONES
        ========================= */

        .os-mobile-menu__item {
          opacity: 0;

          transform: translateY(-14px);

          transition:
            opacity 500ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .os-mobile-menu.is-open
        .os-mobile-menu__item {
          opacity: 1;

          transform: translateY(0);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (min-width: 768px) {
          .os-desktop-nav {
            display: flex !important;
          }

          .os-mobile-btn,
          .os-mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .os-desktop-nav {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .os-menu-line,
          .os-mobile-menu,
          .os-mobile-menu__item {
            transition: none !important;
          }
        }
      `}</style>
    </nav>
  );
}