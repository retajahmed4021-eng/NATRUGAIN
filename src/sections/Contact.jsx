import OrderForm from '../components/OrderForm'
import Reveal from '../components/Reveal'
export default function Contact({ quantity, setQuantity, offer }) {
  return (
    <section id="contact" className="bg-beige/60 px-5 py-20">
      <Reveal className="mx-auto max-w-xl">
        <h2 className="text-center text-4xl font-semibold sm:text-5xl">Get in Touch.</h2>
        <p className="mb-8 mt-3 text-center text-ink/75">Have a question or ready to order? We're here to help!</p>
        <OrderForm quantity={quantity} setQuantity={setQuantity} offer={offer} />
      </Reveal>
    </section>
  )
}
