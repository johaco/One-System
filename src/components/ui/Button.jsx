const BASE = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  gap: '8px', padding: '14px 28px',
  fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase',
  border: '2px solid',
  cursor: 'pointer',
  transition: 'background-color 150ms ease, color 150ms ease',
  fontFamily: 'inherit', textDecoration: 'none',
  /* Better mobile touch */
  minHeight: '48px', touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
};

const VARIANTS = {
  primary:        { backgroundColor: '#000', color: '#fff', borderColor: '#000' },
  primaryOnDark:  { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
  outline:        { backgroundColor: 'transparent', color: '#000', borderColor: '#000' },
  outlineOnDark:  { backgroundColor: 'transparent', color: '#fff', borderColor: '#fff' },
};

export default function Button({ variant = 'primary', href, type = 'button', children, style = {}, ...rest }) {
  const combined = { ...BASE, ...(VARIANTS[variant] ?? VARIANTS.primary), ...style };
  if (href) return <a href={href} style={combined} {...rest}>{children}</a>;
  return <button type={type} style={combined} {...rest}>{children}</button>;
}
