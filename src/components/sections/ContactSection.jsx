import ContactForm from '../ui/ContactForm';
import Button from '../ui/Button';

export default function ContactSection() {
  return (
    <section id="contacto" style={{
      backgroundColor: '#f9f9f9', color: '#1b1b1b',
      paddingTop: 'var(--section-padding)',
      paddingBottom: 'var(--section-padding)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px', alignItems: 'start',
        }}>
          <div>
            <p className="label-sm" style={{ color: '#5d5f5f', marginBottom: '12px' }}>
              [ 04 / Contacto ]
            </p>
            <h2 style={{
              fontSize: 'clamp(28px,4vw,60px)', fontWeight: 700,
              letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '20px',
            }}>
              Iniciemos el sistema.
            </h2>
            <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: 1.65, color: '#5d5f5f', marginBottom: '32px' }}>
              Contanos qué necesita tu negocio y nosotros nos encargamos del resto.
              Sin tecnicismos, sin vueltas.
            </p>
            <Button href="https://wa.me/542634618976?text=Hola%20Joaquin,%20quiero%20consultar%20por%20un%20proyecto." target="_blank" rel="noopener noreferrer" variant="primary" style={{ gap: '10px' }}>
              <span className="material-symbols-outlined" style={{
                fontFamily: 'Material Symbols Outlined', fontSize: '20px',
                fontWeight: 100, fontStyle: 'normal', lineHeight: 1,
              }}>chat</span>
              Chateá con nosotros
            </Button>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
