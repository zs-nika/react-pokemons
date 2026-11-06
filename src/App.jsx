import { pokemons } from "./data"

function App() {
  const message = "Hello World"

  return (
    <div>
      <h1>{message}</h1>
      <p>{pokemons.length}</p>
    </div>
  )
}

export default App