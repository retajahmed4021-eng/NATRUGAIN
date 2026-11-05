import IngredientCard from '../components/IngredientCard'
import Reveal from '../components/Reveal'
import { ingredients } from '../data/ingredients'
export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-beige/60 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-center text-4xl font-semibold sm:text-5xl">Nature's Botanical Blend.</h2></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ingredients.map((i) => <Reveal key={i.name}><IngredientCard {...i} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
