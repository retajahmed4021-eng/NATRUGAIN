import { Minus, Plus, Check } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { product } from '../data/product'
export default function Product({ quantity, setQuantity }) {
  const change = (d) => setQuantity(Math.max(1, Math.min(20, quantity + d)))
  return (
    <section id="product" className="px-5 py-20">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <img src={product.image} alt="NATRUGAIN bottle and box" className="w-full max-w-[900px] h-auto object-contain scale-110" />
        <div>
          <p className="font-serif text-xl text-gold">Meet NATRUGAIN.</p>
          <h2 className="mt-1 text-4xl font-semibold">{product.name}</h2>
          <p className="mt-4 leading-relaxed text-ink/80">{product.description}</p>
          <p className="mt-5 font-serif text-4xl font-bold text-forest">{product.currency} {product.price}</p>
          <ul className="mt-5 space-y-2">{product.highlights.map((h) => <li key={h} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{h}</li>)}</ul>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-forest/30 bg-white">
              <button aria-label="Decrease quantity" onClick={() => change(-1)} className="p-3 text-forest hover:text-gold"><Minus className="h-4 w-4" /></button>
              <span className="w-8 text-center font-semibold" aria-live="polite">{quantity}</span>
              <button aria-label="Increase quantity" onClick={() => change(1)} className="p-3 text-forest hover:text-gold"><Plus className="h-4 w-4" /></button>
            </div>
            <Button href="#contact">Order Now · {product.currency} {quantity * product.price}</Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
