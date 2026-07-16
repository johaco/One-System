// ContactForm.jsx — envío de consulta por WhatsApp
import { useState } from 'react';
import { SOCIAL_LINKS } from '../../constants';
import Button from './Button';

const labelStyle = {
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#000',
};

const inputBase = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 16px',
  border: '1px solid #000',
  borderRadius: 0,
  outline: 'none',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: '15px',
  transition: 'border-width 80ms ease',
};

function getWhatsAppNumber() {
  const whatsappLink = SOCIAL_LINKS.find(
    (socialLink) => socialLink.id === 'whatsapp',
  );

  if (!whatsappLink?.href) {
    return '';
  }

  const numberMatch = whatsappLink.href.match(
    /wa\.me\/(\d+)/,
  );

  return numberMatch?.[1] ?? '';
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    details: '',
  });

  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = getWhatsAppNumber();

    if (!whatsappNumber) {
      setErrorMessage(
        'No se encontró el número de WhatsApp configurado.',
      );

      return;
    }

    const message = [
      'Hola Joaquin, quiero realizar una consulta.',
      '',
      `Nombre o negocio: ${form.name.trim()}`,
      `Correo electrónico: ${form.email.trim()}`,
      '',
      'Descripción del proyecto:',
      form.details.trim(),
    ].join('\n');

    const whatsappUrl = [
      `https://wa.me/${whatsappNumber}`,
      `?text=${encodeURIComponent(message)}`,
    ].join('');

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: '40px',
          border: '1px solid #000',
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            display: 'block',
            marginBottom: '16px',
            fontFamily: 'Material Symbols Outlined',
            fontSize: '40px',
            fontWeight: 100,
            fontStyle: 'normal',
          }}
        >
          chat
        </span>

        <p
          style={{
            marginBottom: '8px',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          WhatsApp abierto
        </p>

        <p
          style={{
            marginBottom: '24px',
            color: '#5d5f5f',
            lineHeight: 1.6,
          }}
        >
          Tu consulta quedó preparada. Solo falta presionar
          Enviar dentro de WhatsApp.
        </p>

        <Button
          type="button"
          variant="secondary"
          onClick={() => setSubmitted(false)}
          style={{ width: '100%' }}
        >
          Realizar otra consulta
        </Button>
      </div>
    );
  }

  const field = (
    id,
    label,
    type = 'text',
    placeholder = '',
  ) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={handleChange}
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused('')}
        style={{
          ...inputBase,
          borderWidth: focused === id ? '2px' : '1px',
        }}
        required
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '28px',
        border: '1px solid #000',
        backgroundColor: '#f9f9f9',
      }}
    >
      {field(
        'name',
        'Nombre',
        'text',
        'Tu nombre o el de tu negocio',
      )}

      {field(
        'email',
        'Email',
        'email',
        'email@ejemplo.com',
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <label htmlFor="details" style={labelStyle}>
          ¿Qué necesita tu sitio?
        </label>

        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Contanos sobre tu negocio y qué funcionalidades te gustaría tener en tu sitio web..."
          value={form.details}
          onChange={handleChange}
          onFocus={() => setFocused('details')}
          onBlur={() => setFocused('')}
          style={{
            ...inputBase,
            resize: 'none',
            borderWidth:
              focused === 'details' ? '2px' : '1px',
          }}
          required
        />
      </div>

      {errorMessage && (
        <p
          role="alert"
          style={{
            margin: 0,
            color: '#b00020',
            fontSize: '13px',
            lineHeight: 1.5,
          }}
        >
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        style={{ width: '100%' }}
      >
        Continuar por WhatsApp
      </Button>
    </form>
  );
}