// ============================================================
// components/ui/ContactForm.jsx — SRP
// Plan selector auto-fills when user clicks "Elegir este plan"
// ============================================================
import { useState, useEffect } from 'react';
import Button from './Button';
import { PRICING_PLANS } from '../../constants';

const labelStyle = {
  fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase', color: '#000',
};

const inputBase = {
  backgroundColor: 'transparent',
  border: '1px solid #000',
  padding: '13px 16px',
  fontSize: '15px', fontFamily: 'inherit',
  outline: 'none', borderRadius: 0,
  width: '100%',
  transition: 'border-width 80ms ease',
};

export default function ContactForm({ selectedPlan = '', onPlanChange }) {
  const [form, setForm] = useState({ name: '', marca: '', plan: selectedPlan, message: '' });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) setForm((prev) => ({ ...prev, plan: selectedPlan }));
  }, [selectedPlan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'plan') onPlanChange?.(value);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Armamos el mensaje para WhatsApp
  const message = `
🚀 Nuevo contacto desde la web

👤 Nombre: ${form.name}

📧 Marca: ${form.marca}

📦 Plan de interés: ${form.plan || 'No seleccionado'}

💬 Mensaje:
${form.message}
  `;

  // Número de WhatsApp
  // IMPORTANTE:
  // sin "+"
  // sin espacios
  const phone = '542634618976';

  // Generamos URL
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Abrimos WhatsApp
  window.open(whatsappURL, '_blank');

  // Feedback visual
  setSubmitted(true);
};
  if (submitted) {
    return (
      <div style={{ padding: '40px', border: '1px solid #000', textAlign: 'center' }}>
        <span className="material-symbols-outlined" style={{
          fontFamily: 'Material Symbols Outlined', fontSize: '40px',
          fontWeight: 100, fontStyle: 'normal',
          display: 'block', marginBottom: '16px',
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
      {field('name',  'Nombre', 'text',  'Nombre del negocio o tuyo')}
      {field('marca', 'Marca', 'text', 'Link de tu marca (cuenta de instagram, Facebook, etc)')}

      {/* Plan selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="plan" style={labelStyle}>Plan de interés</label>
        <div style={{ position: 'relative' }}>
          <select
            id="plan" name="plan" value={form.plan} onChange={handleChange}
            onFocus={() => setFocused('plan')} onBlur={() => setFocused('')}
            style={{
              ...inputBase, appearance: 'none', WebkitAppearance: 'none',
              borderWidth: focused === 'plan' ? '2px' : '1px',
              paddingRight: '40px', cursor: 'pointer',
              color: form.plan ? '#1b1b1b' : '#9a9a9a',
            }}
          >
            <option value="" disabled>Seleccioná un plan...</option>
            {PRICING_PLANS.map((p) => (
              <option key={p.id} value={p.title}>{p.title}</option>
            ))}
          </select>
          <span className="material-symbols-outlined" style={{
            position: 'absolute', right: '12px', top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '20px', pointerEvents: 'none', color: '#5d5f5f',
            fontFamily: 'Material Symbols Outlined', fontWeight: 100, fontStyle: 'normal',
          }}>expand_more</span>
        </div>
      </div>

      {/* Message */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="message" style={labelStyle}>Mensaje</label>
        <textarea
          id="message" name="message" placeholder="Contanos sobre tu negocio..." rows={4}
          value={form.message} onChange={handleChange}
          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
          style={{ ...inputBase, resize: 'none', borderWidth: focused === 'message' ? '2px' : '1px' }}
          required
        />
      </div>

      <Button type="submit" variant="primary" style={{ width: '100%' }}>
        Enviar Mensaje
      </Button>
    </form>
  );
}
