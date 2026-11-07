import { pokemons } from "./data"
import PokemonCard from "./PokemonCard.jsx"
import "./App.css"
import { useState } from "react"

function App() {
const [selectedType, setSelectedType] = useState("All")

const visiblePokemons = pokemons.filter((pokemon) => selectedType === "All" || pokemon.type === selectedType)
const types = ["All", ...new Set(pokemons.map((pokemon) => pokemon.type))]
  return (
    <div>
      <h1>Pokemon Card Collection</h1>
      <p>Showing: {selectedType}</p>
      <div className="filter-bar">
{types.map((type) => ( <button key={type} onClick={() => setSelectedType(type)}>
    {type}
  </button>
  
))}
</div>
      <div className="card-grid">
      {visiblePokemons.map((pokemon) => (
  <PokemonCard key={pokemon.id} pokemon={pokemon} />
))}</div>
    </div>
  )
}


export default App