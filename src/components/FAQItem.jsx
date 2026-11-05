import { ChevronDown } from 'lucide-react'
export default function FAQItem({ q, a, open, onToggle, id }) {
  return (
    <div className="rounded-2xl bg-white shadow-soft">
      <h3>
        <button onClick={onToggle} aria-expanded={open} aria-controls={id} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-sans text-base font-semibold text-forest">
          {q}<ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      <div id={id} className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden"><p className="px-6 pb-5 text-sm leading-relaxed text-ink/80">{a}</p></div>
      </div>
    </div>
  )
}
