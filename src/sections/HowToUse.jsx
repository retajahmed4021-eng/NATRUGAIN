import { ClipboardList } from 'lucide-react'
import Reveal from '../components/Reveal'
export default function HowToUse() {
  return (
    <section id="how-to-use" className="px-5 pb-20">
      <Reveal className="mx-auto max-w-2xl rounded-3xl border border-gold/40 bg-white p-8 text-center shadow-soft">
        <ClipboardList className="mx-auto h-7 w-7 text-gold" aria-hidden="true" />
        <h2 className="mt-3 text-3xl font-semibold">How to Use NATRUGAIN?</h2>
        <p className="mt-4 leading-relaxed text-ink/80">Please refer to the approved product label or consult a qualified healthcare professional for usage instructions.</p>
      </Reveal>
    </section>
  )
}
