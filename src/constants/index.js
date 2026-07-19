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
];

export const SOCIAL_LINKS = [
  {
    id: 'instagram', label: 'Instagram',
    href: 'https://instagram.com/1.one.system',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
     id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/542634618976?text=Hola%20Joaquin,%20quiero%20consultar%20por%20un%20sistema%20web.',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.893a9.825 9.825 0 012.9 7.01c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
  },
];
