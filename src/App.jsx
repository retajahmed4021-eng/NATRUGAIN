import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Ingredients from './sections/Ingredients'
import Product from './sections/Product'
import HowToUse from './sections/HowToUse'
import Offers from './sections/Offers'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

export default function App() {
  const [quantity, setQuantity] = useState(1)
  const [offer, setOffer] = useState(null)
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const selectOffer = (o) => {
    setOffer(o)
    if (o.id === 'two') setQuantity((q) => Math.max(q, 2))
    if (o.id === 'four') setQuantity((q) => Math.max(q, 3))
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Ingredients />
        <Product quantity={quantity} setQuantity={setQuantity} />
        <HowToUse /><Offers onSelect={selectOffer} /><FAQ />
        <Contact quantity={quantity} setQuantity={setQuantity} offer={offer} />
      </main>
      <Footer />
      {showTop && (
        <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-40 rounded-full bg-forest p-3 text-cream shadow-soft hover:bg-gold hover:text-ink"><ArrowUp className="h-5 w-5" /></button>
      )}
    </>
  )
}
