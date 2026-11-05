import OfferCard from '../components/OfferCard'
import Reveal from '../components/Reveal'
import { offers, offersDisclaimer } from '../data/offers'
export default function Offers({ onSelect }) {
  return (
    <section id="offers" className="bg-sage/25 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-center text-4xl font-semibold sm:text-5xl">Special Offers</h2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">{offers.map((o) => <Reveal key={o.id} className="flex"><OfferCard offer={o} onSelect={onSelect} /></Reveal>)}</div>
        <p className="mt-8 text-center text-xs text-ink/60">{offersDisclaimer}</p>
      </div>
    </section>
  )
}
