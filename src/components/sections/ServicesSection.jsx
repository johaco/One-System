import { SERVICES } from '../../constants';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection() {
  return (
    <section id="servicios" style={{
      backgroundColor: '#f9f9f9', color: '#1b1b1b',
      paddingTop: 'var(--section-padding)',
      paddingBottom: 'var(--section-padding)',
    }}>
      <div className="container">
        <div style={{ marginBottom: '48px' }}>
          <p className="label-sm" style={{ color: '#5d5f5f', marginBottom: '12px' }}>[ 02 / Servicios ]</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 60px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Soluciones escalables.
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
