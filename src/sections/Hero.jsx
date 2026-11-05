import Button from '../components/Button'
import { product } from '../data/product'
export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-cream via-cream to-sage/40 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-2 md:pb-24 md:pt-10">
        <div>
          <p className="text-xs font-semibold tracking-widest text-gold">NATURAL BOTANICAL WELLNESS</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">Natural Gain, True Form.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">Meet NATRUGAIN, a botanical-inspired liquid supplement created with a blend of carefully selected ingredients.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#product">Discover the Product</Button>
            <Button href="#contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
       <div className="mx-auto flex w-full items-center justify-center md:justify-end">
          <img src={product.image} alt="NATRUGAIN dropper bottle and packaging box" className="w-full max-w-[900px] h-auto object-contain scale-110" />
        </div>
      </div>
    </section>
  )
}