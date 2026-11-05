import { useState } from 'react'
import FAQItem from '../components/FAQItem'
import { product } from '../data/product'
const faqs = [
  ['What is NATRUGAIN?', 'NATRUGAIN is a botanical-inspired liquid dietary supplement made with a blend of selected plant ingredients, vitamins, and minerals. It comes in a 50 ml dropper bottle.'],
  ['What are its main ingredients?', "Fenugreek seeds, artemisia, soybeans, pea seeds, pumpkin seeds, sesame seeds, cinnamon, bee pollen, brewer's yeast, plus vitamins and minerals (B12, magnesium, potassium)."],
  ['What is the product price?', `One bottle of NATRUGAIN costs ${product.currency} ${product.price}.`],
  ['How can I place an order?', 'Fill in the order form in the Contact section and press WhatsApp Order. WhatsApp opens with your order details, and our team replies to confirm.'],
  ['Is delivery available outside Alexandria?', 'Delivery details for each governorate are confirmed when you contact us. Select your governorate in the order form and we will confirm availability on WhatsApp.'],
  ['Where can I find the verified usage instructions?', 'Please refer to the approved product label or consult a qualified healthcare professional.']
]
export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-4xl font-semibold sm:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => <FAQItem key={q} id={`faq-${i}`} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      </div>
    </section>
  )
}
