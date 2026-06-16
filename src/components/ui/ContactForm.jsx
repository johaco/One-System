// ContactForm.jsx — sin selector de plan (plan único)
import { useState } from 'react';
import Button from './Button';

const labelStyle = {
  fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase', color: '#000',
};

const inputBase = {
  backgroundColor: 'transparent', border: '1px solid #000',
  padding: '13px 16px', fontSize: '15px', fontFamily: 'inherit',
  outline: 'none', borderRadius: 0, width: '100%',
  transition: 'border-width 80ms ease',
};

export default function ContactForm() {
  const [form,      setForm]      = useState({ name: '', email: '', details: '' });
  const [focused,   setFocused]   = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '40px', border: '1px solid #000', textAlign: 'center' }}>
        <span className="material-symbols-outlined" style={{
          fontFamily: 'Material Symbols Outlined', fontSize: '40px',
          fontWeight: 100, fontStyle: 'normal', display: 'block', marginBottom: '16px',
        }}>check_circle</span>
        <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>¡Mensaje enviado!</p>
        <p style={{ color: '#5d5f5f' }}>Te contactaremos a la brevedad.</p>
      </div>
    );
  }

  const field = (id, label, type = 'text', placeholder = '') => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input
        id={id} name={id} type={type} placeholder={placeholder}
        value={form[id]} onChange={handleChange}
        onFocus={() => setFocused(id)} onBlur={() => setFocused('')}
        style={{ ...inputBase, borderWidth: focused === id ? '2px' : '1px' }}
        required
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex', flexDirection: 'column', gap: '20px',
      padding: '28px', border: '1px solid #000', backgroundColor: '#f9f9f9',
    }} noValidate>

      {field('name',  'Nombre',  'text',  'Tu nombre o el de tu negocio')}
      {field('email', 'Email',   'email', 'email@ejemplo.com')}

      {/* Cuéntanos qué necesitás */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="details" style={labelStyle}>
          ¿Qué necesita tu sitio?
        </label>
        <textarea
          id="details" name="details" rows={5}
          placeholder="Contanos sobre tu negocio y qué funcionalidades te gustaría tener en tu sitio web..."
          value={form.details} onChange={handleChange}
          onFocus={() => setFocused('details')} onBlur={() => setFocused('')}
          style={{
            ...inputBase, resize: 'none',
            borderWidth: focused === 'details' ? '2px' : '1px',
          }}
          required
        />
      </div>

      <Button type="submit" variant="primary" style={{ width: '100%' }}>
        Enviar consulta
      </Button>
    </form>
  );
}
