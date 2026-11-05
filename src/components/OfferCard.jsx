import { Gift } from 'lucide-react'
import Button from './Button'
export default function OfferCard({ offer, onSelect }) {
  return (
    <article className="relative flex flex-col rounded-3xl border border-gold/40 bg-white p-7 shadow-soft">
      <Gift className="absolute right-6 top-6 h-6 w-6 text-gold" aria-hidden="true" />
      <span className="w-fit rounded-full bg-forest px-4 py-1.5 font-serif text-2xl font-bold text-cream">{offer.badge}</span>
      <h3 className="mt-5 text-2xl font-semibold leading-snug">{offer.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink/70">{offer.note}</p>
      <Button onClick={() => onSelect(offer)} variant="secondary" className="mt-6">Order with this offer</Button>
    </article>
  )
}
