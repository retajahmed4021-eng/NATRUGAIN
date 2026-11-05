import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { Leaf } from 'lucide-react'
export default function About() {
  return (
    <section id="about" className="px-5 py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Leaf className="mx-auto h-6 w-6 text-gold" aria-hidden="true" />
        <p className="mt-3 font-serif text-xl text-gold">Inspired by Nature, Made with Care.</p>
        <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">The Power of Nature.</h2>
        <p className="mt-6 leading-relaxed text-ink/80">NATRUGAIN is a liquid dietary supplement developed around a blend of botanical ingredients, selected plant extracts, vitamins, and minerals.</p>
        <p className="mt-4 leading-relaxed text-ink/80">Its identity reflects an appreciation for nature-inspired wellness and thoughtfully selected ingredients.</p>
        <Button href="#product" variant="secondary" className="mt-8 !py-2.5">Learn More</Button>
      </Reveal>
    </section>
  )
}
