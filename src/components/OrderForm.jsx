import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { product } from '../data/product'
import { config } from '../data/config'

const governorates = ['Alexandria', 'Cairo', 'Giza', 'Beheira', 'Gharbia', 'Dakahlia', 'Sharqia', 'Qalyubia', 'Monufia', 'Kafr El Sheikh', 'Damietta', 'Port Said', 'Ismailia', 'Suez', 'North Sinai', 'South Sinai', 'Fayoum', 'Beni Suef', 'Minya', 'Asyut', 'Sohag', 'Qena', 'Luxor', 'Aswan', 'Red Sea', 'New Valley', 'Matrouh']
const field = 'mt-1 w-full rounded-xl border border-beige bg-cream px-4 py-3 text-sm focus:border-gold focus:outline-none'

export default function OrderForm({ quantity, setQuantity, offer }) {
  const [v, setV] = useState({ name: '', phone: '', governorate: '', address: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const total = quantity * product.price
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (v.name.trim().length < 3) e.name = 'Enter your full name.'
    if (!/^(\+?20|0)?1[0125]\d{8}$/.test(v.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid Egyptian mobile number.'
    if (!v.governorate) e.governorate = 'Select your governorate.'
    if (v.address.trim().length < 10) e.address = 'Enter your full address.'
    if (!Number.isInteger(quantity) || quantity < 1) e.quantity = 'Quantity must be at least 1.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    const msg = [
      'Hello NATRUGAIN, I would like to place an order:', '',
      `Product: ${product.name}`, `Quantity: ${quantity}`,
      `Estimated total: ${product.currency} ${total}`,
      offer ? `Offer requested: ${offer.badge} ${offer.title}` : null, '',
      `Name: ${v.name.trim()}`, `Phone: ${v.phone.trim()}`,
      `Governorate: ${v.governorate}`, `Address: ${v.address.trim()}`
    ].filter((l) => l !== null).join('\n')
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
  }

  const Err = ({ k }) => errors[k] ? <p className="mt-1 text-xs text-red-700" role="alert">{errors[k]}</p> : null
  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      <div><label className="text-sm font-semibold" htmlFor="name">Full Name</label><input id="name" className={field} value={v.name} onChange={set('name')} autoComplete="name" /><Err k="name" /></div>
      <div><label className="text-sm font-semibold" htmlFor="phone">Phone Number</label><input id="phone" type="tel" inputMode="tel" className={field} value={v.phone} onChange={set('phone')} autoComplete="tel" placeholder="01XXXXXXXXX" /><Err k="phone" /></div>
      <div><label className="text-sm font-semibold" htmlFor="gov">Governorate</label>
        <select id="gov" className={field} value={v.governorate} onChange={set('governorate')}><option value="">Select governorate</option>{governorates.map((g) => <option key={g}>{g}</option>)}</select><Err k="governorate" /></div>
      <div><label className="text-sm font-semibold" htmlFor="address">Full Address</label><textarea id="address" rows="3" className={field} value={v.address} onChange={set('address')} autoComplete="street-address" /><Err k="address" /></div>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="text-sm font-semibold" htmlFor="qty">Product Quantity</label>
          <input id="qty" type="number" min="1" max="20" className={field} value={quantity} onChange={(e) => setQuantity(Math.max(1, Math.min(20, parseInt(e.target.value, 10) || 1)))} /><Err k="quantity" /></div>
        <div><span className="text-sm font-semibold">Total Price</span><div className="mt-1 rounded-xl bg-beige px-4 py-3 text-sm font-bold text-forest">{product.currency} {total}</div></div>
      </div>
      {offer && <p className="rounded-xl bg-sage/25 px-4 py-3 text-xs">Offer requested: <strong>{offer.badge} — {offer.title}</strong>. Discount is confirmed with you on WhatsApp.</p>}
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-semibold text-cream transition-colors hover:bg-ink"><MessageCircle className="h-5 w-5" />WhatsApp Order</button>
      <p className="text-xs text-ink/60" aria-live="polite">
        {sent ? 'WhatsApp opened with your order details. Your order is not confirmed until our team replies to you.' : 'This opens WhatsApp with your order details. Your order is confirmed only after our team replies.'}
      </p>
    </form>
  )
}
