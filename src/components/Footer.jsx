import { Instagram, Facebook, Music2, Mail, Phone, MapPin } from 'lucide-react'
import { config } from '../data/config'
const nav = [['Home', 'home'], ['About', 'about'], ['Ingredients', 'ingredients'], ['Product', 'product'], ['Offers', 'offers'], ['FAQ', 'faq'], ['Contact', 'contact']]
const socials = [[Instagram, 'instagram', 'Instagram'], [Facebook, 'facebook', 'Facebook'], [Music2, 'tiktok', 'TikTok']]
export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl font-bold">NATRUGAIN</p>
          <p className="mt-1 font-serif text-lg text-gold">Natural Gain, True Form.</p>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">A botanical-inspired liquid dietary supplement made with selected plant ingredients, vitamins, and minerals.</p>
          <div className="mt-5 flex gap-3">
            {socials.map(([Icon, key, label]) => (
              <a key={key} href={config.social[key] || undefined} target="_blank" rel="noopener noreferrer" aria-label={label}
                 aria-disabled={!config.social[key]} className={`rounded-full border border-cream/30 p-2.5 transition-colors hover:bg-gold hover:text-ink ${config.social[key] ? '' : 'pointer-events-none opacity-40'}`}><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-cream/75">{nav.map(([l, id]) => <li key={id}><a className="hover:text-gold" href={`#${id}`}>{l}</a></li>)}</ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" />{config.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" />{config.email}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" />{config.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 px-5 py-5 text-center text-xs text-cream/60">
        <p>This product is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease. For adults only.</p>
        <p className="mt-2"><a className="hover:text-gold" href={config.privacyUrl}>Privacy Policy</a> · <a className="hover:text-gold" href={config.termsUrl}>Terms and Conditions</a></p>
        <p className="mt-2">© {new Date().getFullYear()} NATRUGAIN. All rights reserved.</p>
      </div>
    </footer>
  )
}
