export default function IngredientCard({ name, desc, icon: Icon }) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-soft transition-transform hover:-translate-y-1">
      <div className="mb-5 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-sage/40 to-beige">
        <Icon className="h-10 w-10 text-forest" strokeWidth={1.4} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/75">{desc}</p>
    </article>
  )
}
