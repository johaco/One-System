export default function AboutSection() {
  return (
    <section id="nosotros" style={{
      backgroundColor: '#0a0a0a', color: '#fff',
      paddingTop: 'var(--section-padding)',
      paddingBottom: 'var(--section-padding)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px', alignItems: 'start',
        }}>
          <p className="label-sm" style={{ color: '#555', letterSpacing: '0.12em' }}>
            [ 01 / Sobre Nosotros ]
          </p>
          <div style={{ gridColumn: 'span 2' }}>
            <h2 style={{
              fontSize: 'clamp(26px, 4vw, 60px)', fontWeight: 700,
              letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '20px',
            }}>
              Arquitectura digital para el mercado local.
            </h2>
            <p style={{ fontSize: 'clamp(15px, 1.5vw, 20px)', lineHeight: 1.65, color: '#888', maxWidth: '70ch' }}>
              En One System entendemos el ritmo del emprendedor argentino. No
              ofrecemos plantillas genéricas; construimos herramientas digitales
              personalizadas, rápidas y escalables. Nuestro enfoque es simple:
              eliminar lo innecesario para destacar el valor real de tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
