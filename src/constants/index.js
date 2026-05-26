// ============================================================
// constants/index.js — centralised data (SRP + OCP)
// ============================================================

export const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Inversión', href: '#inversion' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES = [
  {
    id: 'menuweb',
    icon: 'restaurant_menu',
    title: 'MenuWeb',
    description:
      'Menú digital para gastronomía. Ágil, escaneable y siempre actualizado. Tus clientes lo ven con solo escanear un QR.',
  },
  {
    id: 'landing',
    icon: 'web',
    title: 'Landing Page',
    description:
      'Captá clientes con una página de impacto. Diseñada para convertir visitas en consultas reales desde el primer segundo.',
  },
  {
    id: 'catalogo',
    icon: 'inventory_2',
    title: 'Catálogo Web',
    description:
      'Tu inventario online para tiendas locales. Mostrá tus productos de forma clara, profesional y siempre actualizada.',
  },
  {
    id: 'ecommerce',
    icon: 'shopping_cart',
    title: 'E-Commerce',
    description:
      'Tienda completa con carrito y pagos integrados. Vendé las 24 horas sin intervención manual.',
  },
];

// ── Billing periods ──────────────────────────────────────────
export const BILLING_PERIODS = [
  { id: 'monthly',    label: 'Mensual',    discount: 0,    badge: null },
  { id: 'biannual',   label: 'Semestral',  discount: 0.10, badge: '10% off' },
  { id: 'annual',     label: 'Anual',      discount: 0.20, badge: '20% off' },
];

// Base prices in ARS (monthly). Discounts applied dynamically in the component.
export const PRICING_PLANS = [
  {
    id: 'menuweb',
    title: 'MenuWeb',
    basePrice: 20000,
    highlighted: false,
    tag: null,
    features: [
      { text: 'Hasta 50 ítems en el menú',       icon: 'restaurant_menu' },
      { text: 'Código QR personalizado',           icon: 'qr_code' },
      { text: 'Hosting y dominio incluido',        icon: 'dns' },
      { text: 'Soporte técnico mensual',           icon: 'support_agent' },
      { text: '2 actualizaciones de contenido/mes', icon: 'edit' },
    ],
  },
  {
    id: 'landing',
    title: 'Landing Page',
    basePrice: 25000,
    highlighted: true,
    tag: 'Más elegido',
    features: [
      { text: 'Diseño 100% a medida',              icon: 'brush' },
      { text: 'Formulario de contacto',            icon: 'mail' },
      { text: 'Hosting y dominio incluido',        icon: 'dns' },
      { text: 'SEO básico configurado',            icon: 'search' },
      { text: 'Soporte técnico mensual',           icon: 'support_agent' },
      { text: '5 actualizaciones de contenido/mes', icon: 'edit' },
    ],
  },
  {
    id: 'catalogo',
    title: 'Catálogo Web',
    basePrice: 30000,
    highlighted: false,
    tag: null,
    features: [
      { text: 'Hasta 100 productos',               icon: 'inventory_2' },
      { text: 'Filtros y búsqueda',                icon: 'filter_list' },
      { text: 'Botón directo a WhatsApp',          icon: 'chat' },
      { text: 'Hosting y dominio incluido',        icon: 'dns' },
      { text: 'Soporte técnico mensual',           icon: 'support_agent' },
      { text: '5 actualizaciones de contenido/mes', icon: 'edit' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    basePrice: 45000,
    highlighted: false,
    tag: null,
    features: [
      { text: 'Productos ilimitados',              icon: 'all_inclusive' },
      { text: 'Carrito de compras',                icon: 'shopping_cart' },
      { text: 'Pasarela de pagos integrada',       icon: 'payments' },
      { text: 'Hosting y dominio incluido',        icon: 'dns' },
      { text: 'Soporte técnico mensual',           icon: 'support_agent' },
      { text: 'Actualizaciones ilimitadas',        icon: 'edit' },
    ],
  },
];

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
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/1.one.system',
    icon: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`,
  },
];
