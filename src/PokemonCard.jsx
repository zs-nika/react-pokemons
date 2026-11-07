function PokemonCard({ pokemon })  {

  return (
    <div>
    <div className="card">
      <h2>{pokemon.name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <p>{pokemon.type}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
    </div>
</div>
  )
}

export default PokemonCard