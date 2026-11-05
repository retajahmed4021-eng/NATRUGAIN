import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'
const links = [['Home', 'home'], ['About', 'about'], ['Ingredients', 'ingredients'], ['Product', 'product'], ['Offers', 'offers'], ['FAQ', 'faq'], ['Contact', 'contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? 'bg-cream/95 shadow-soft backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-serif text-3xl font-bold tracking-wide text-forest">NATRUGAIN</a>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map(([l, id]) => <li key={id}><a href={`#${id}`} className="text-sm font-medium text-ink/80 transition-colors hover:text-gold">{l}</a></li>)}
        </ul>
        <Button href="#contact" className="hidden !py-2 lg:inline-flex">Order Now</Button>
        <button className="p-2 text-forest lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-beige px-5 pb-6 pt-2 lg:hidden">
          {links.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-beige py-3 font-medium">{l}</a>)}
          <Button href="#contact" onClick={() => setOpen(false)} className="mt-5 w-full">Order Now</Button>
        </div>
      )}
    </header>
  )
}
