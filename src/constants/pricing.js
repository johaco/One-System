export const PRICING_CONFIG = {
  startingPrice: 25000,
  title: 'Cotización personalizada',
  tagline: 'Una inversión pensada para tu negocio y su crecimiento.',
  description:
    'Primero analizamos lo que tu sistema necesita para funcionar correctamente. Luego te entregamos una propuesta clara con el valor del desarrollo, la infraestructura y el acompañamiento.',
  quoteFactors: [
    {
      icon: 'account_tree',
      title: 'Alcance y complejidad',
      text: 'Cantidad de módulos, usuarios, roles, automatizaciones y funcionalidades.',
    },
    {
      icon: 'dns',
      title: 'Infraestructura',
      text: 'Hosting, VPS, base de datos, almacenamiento, tráfico y copias de seguridad.',
    },
    {
      icon: 'integration_instructions',
      title: 'Integraciones',
      text: 'Pasarelas de pago, correos, APIs, WhatsApp y servicios de terceros.',
    },
    {
      icon: 'shield',
      title: 'Seguridad y continuidad',
      text: 'Certificados, accesos, monitoreo, respaldos y necesidades de disponibilidad.',
    },
    {
      icon: 'support_agent',
      title: 'Soporte y mantenimiento',
      text: 'Actualizaciones, correcciones, asistencia técnica y mejoras acordadas.',
    },
    {
      icon: 'schedule',
      title: 'Tiempo de desarrollo',
      text: 'Diseño, programación, pruebas, puesta en producción y capacitación.',
    },
  ],
  paymentOptions: [
    {
      id: 'monthly',
      icon: 'calendar_month',
      title: 'Mensual',
      label: 'Mayor flexibilidad',
      text: 'Una cuota por mes según la cotización aprobada.',
    },
    {
      id: 'quarterly',
      icon: 'date_range',
      title: 'Trimestral',
      label: 'Más previsibilidad',
      text: 'Tres meses en un solo pago, con condiciones definidas en la propuesta.',
    },
    {
      id: 'annual',
      icon: 'event_available',
      title: 'Anual',
      label: 'Mejor planificación',
      text: 'Doce meses en un solo pago, con el mejor beneficio disponible según el proyecto.',
    },
  ],
  included: [
    { icon: 'description', text: 'Cotización detallada y sin compromiso' },
    { icon: 'visibility', text: 'Costos operativos informados con claridad' },
    { icon: 'devices', text: 'Diseño adaptable a celulares y computadoras' },
    { icon: 'rocket_launch', text: 'Configuración y puesta en producción' },
    { icon: 'support_agent', text: 'Acompañamiento según el plan contratado' },
    { icon: 'savings', text: 'Alternativas pensadas para cuidar tu inversión' },
  ],
};
