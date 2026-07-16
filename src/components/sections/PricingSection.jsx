// ============================================================
// PricingSection.jsx — Cotización según necesidades reales
// ============================================================
import { PRICING_CONFIG } from '../../constants/pricing';
import Button from '../ui/Button';
import './PricingSection.css';

function formatARS(value) {
  return `$${Math.round(value).toLocaleString('es-AR')}`;
}

function MaterialIcon({ children, className = '' }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export default function PricingSection({ onSelectPlan }) {
  const handleQuoteRequest = () => {
    onSelectPlan?.(PRICING_CONFIG.title);
  };

  return (
    <section id="inversion" className="pricing-section">
      <div className="container">
        <header className="pricing-section__header">
          <span className="pricing-section__eyebrow">[ 03 / Inversión ]</span>

          <h2 className="pricing-section__title">
            Primero cotizamos.
            <br />
            Después elegís cómo pagar.
          </h2>

          <p className="pricing-section__intro">
            No todos los sistemas necesitan los mismos recursos. Evaluamos el
            desarrollo y los gastos reales de funcionamiento para ofrecerte una
            solución sostenible, sin cobrar de más y sin comprometer la calidad.
          </p>
        </header>

        <div className="pricing-card">
          <div className="pricing-card__summary">
            <span className="pricing-card__label">Valor de referencia</span>

            <h3 className="pricing-card__name">{PRICING_CONFIG.title}</h3>
            <p className="pricing-card__tagline">{PRICING_CONFIG.tagline}</p>

            <div className="pricing-card__price">
              <span className="pricing-card__from">Desde</span>
              <strong>{formatARS(PRICING_CONFIG.startingPrice)}</strong>
              <span>/mes</span>
            </div>

            <p className="pricing-card__description">
              {PRICING_CONFIG.description}
            </p>

            <div className="pricing-card__notice">
              <MaterialIcon>info</MaterialIcon>
              <p>
                El valor final depende de los recursos y servicios que necesite
                el proyecto. Los costos de proveedores externos se detallan en
                la cotización.
              </p>
            </div>

            <Button
              variant="primaryOnDark"
              onClick={handleQuoteRequest}
              style={{ width: '100%' }}
            >
              Solicitar cotización
            </Button>

            <p className="pricing-card__legal">
              Precios en ARS. La propuesta final informa alcance, plazos,
              infraestructura y condiciones de pago.
            </p>
          </div>

          <div className="pricing-card__content">
            <div className="pricing-block">
              <div className="pricing-block__heading">
                <span>¿Qué se cotiza?</span>
                <span className="pricing-block__badge">TRANSPARENTE</span>
              </div>

              <div className="quote-factors">
                {PRICING_CONFIG.quoteFactors.map((factor) => (
                  <article className="quote-factor" key={factor.title}>
                    <MaterialIcon className="quote-factor__icon">
                      {factor.icon}
                    </MaterialIcon>

                    <div>
                      <h4>{factor.title}</h4>
                      <p>{factor.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="pricing-block">
              <div className="pricing-block__heading">
                <span>Modalidades que vas a recibir</span>
                <span className="pricing-block__badge">3 OPCIONES</span>
              </div>

              <div className="payment-options">
                {PRICING_CONFIG.paymentOptions.map((option) => (
                  <article className="payment-option" key={option.id}>
                    <div className="payment-option__top">
                      <MaterialIcon>{option.icon}</MaterialIcon>
                      <span>{option.label}</span>
                    </div>

                    <h4>{option.title}</h4>
                    <p>{option.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
