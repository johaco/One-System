export const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Inversión', href: '#inversion' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES = [
  { id: 'menuweb',   icon: 'restaurant_menu', title: 'MenuWeb',      description: 'Menú digital para gastronomía. Ágil, escaneable y siempre actualizado. Tus clientes lo ven con solo escanear un QR.' },
  { id: 'landing',   icon: 'web',             title: 'Landing Page', description: 'Captá clientes con una página de impacto. Diseñada para convertir visitas en consultas reales desde el primer segundo.' },
  { id: 'catalogo',  icon: 'inventory_2',     title: 'Catálogo Web', description: 'Tu inventario online para tiendas locales. Mostrá tus productos de forma clara, profesional y siempre actualizada.' },
  { id: 'ecommerce', icon: 'shopping_cart',   title: 'E-Commerce',   description: 'Tienda completa con carrito y pagos integrados. Vendé las 24 horas sin intervención manual.' },
];

export const BILLING_PERIODS = [
  { id: 'monthly',  label: 'Mensual',   discount: 0,    badge: null,      months: 1  },
  { id: 'biannual', label: 'Semestral', discount: 0.10, badge: '10% off', months: 6  },
  { id: 'annual',   label: 'Anual',     discount: 0.25, badge: '25% off', months: 12 },
];

// ── Plan único 100% personalizable ──────────────────────────
export const SINGLE_PLAN = {
  basePrice: 25000,
  title: 'Plan Personalizado',
  tagline: '100% adaptado a tu negocio.',
  description:
    'Desarrollamos exactamente lo que tu emprendimiento necesita. Nos reunimos con vos, entendemos tus objetivos y construimos tu sitio desde cero. Sin plantillas, sin límites, sin costos ocultos.',

  // Siempre incluido en el plan
  included: [
    { icon: 'brush',         text: 'Diseño 100% a medida' },
    { icon: 'dns',           text: 'Hosting y dominio incluido' },
    { icon: 'support_agent', text: 'Soporte técnico mensual' },
    { icon: 'edit',          text: 'Actualizaciones de contenido' },
    { icon: 'search',        text: 'SEO básico configurado' },
    { icon: 'devices',       text: 'Responsive en todos los dispositivos' },
  ],

  // Elegís las funcionalidades que necesita tu negocio
  customizable: [
    { icon: 'restaurant_menu', text: 'Menú digital con código QR' },
    { icon: 'inventory_2',     text: 'Catálogo de productos' },
    { icon: 'shopping_cart',   text: 'Tienda con carrito de compras' },
    { icon: 'payments',        text: 'Pasarela de pagos integrada' },
    { icon: 'mail',            text: 'Formulario de contacto' },
    { icon: 'chat',            text: 'Botón de WhatsApp directo' },
    { icon: 'photo_library',   text: 'Galería de fotos / portfolio' },
    { icon: 'event',           text: 'Sistema de turnos y reservas' },
  ],
};

export const FOOTER_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Inversión', href: '#inversion' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Privacidad', href: '#' },
  { label: 'Términos', href: '#' },
];

export const SOCIAL_LINKS = [
  {
    id: 'instagram', label: 'Instagram',
    href: 'https://instagram.com/onesystem',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
];
