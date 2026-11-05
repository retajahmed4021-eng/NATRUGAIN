const styles = {
  primary: 'bg-forest text-cream hover:bg-ink shadow-soft',
  secondary: 'border border-forest text-forest hover:bg-forest hover:text-cream',
  gold: 'bg-gold text-ink hover:bg-beige',
  light: 'bg-cream text-forest hover:bg-beige'
}
export default function Button({ href, onClick, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`
  return href
    ? <a href={href} className={cls} {...rest}>{children}</a>
    : <button type="button" onClick={onClick} className={cls} {...rest}>{children}</button>
}
