import AnimatedWaveBackground from '../canvas/AnimatedWaveBackground';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: '#000',
      paddingTop: '60px', paddingBottom: '80px',
      /* Keep section on its own GPU layer */
      isolation: 'isolate',
    }}>
      <AnimatedWaveBackground />

      {/* Vignette — cheap gradient, no repaint */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.48) 50%,rgba(0,0,0,.06) 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
        <p className="label-sm" style={{ color: 'rgba(255,255,255,.40)', marginBottom: '20px', letterSpacing: '0.15em' }}>
          [ One System — Argentina ]
        </p>
        <h1 style={{
          fontSize: 'clamp(38px, 7vw, 110px)',
          fontWeight: 800, lineHeight: 0.95,
          letterSpacing: '-0.04em',
          marginBottom: '28px', maxWidth: '14ch',
        }}>
          Creamos tu presencia digital a medida.
        </h1>
        <p style={{
          fontSize: 'clamp(15px, 1.8vw, 20px)',
          lineHeight: 1.65, color: 'rgba(255,255,255,.62)',
          marginBottom: '40px', maxWidth: '52ch',
        }}>
          Soluciones web de alto rendimiento para emprendedores.
          Diseño personalizado, eficiencia técnica y claridad absoluta en cada línea de código.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Button href="#contacto" variant="primaryOnDark">Empezá tu proyecto</Button>
          <Button href="https://wa.me/542634618976?text=Hola%20Joaquin,%20quiero%20consultar%20por%20un%20proyecto." target="_blank" rel="noopener noreferrer" variant="outlineOnDark">
            <span className="material-symbols-outlined" style={{
              fontFamily: 'Material Symbols Outlined', fontSize: '18px',
              fontWeight: 100, fontStyle: 'normal', lineHeight: 1,
            }}>chat</span>
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
