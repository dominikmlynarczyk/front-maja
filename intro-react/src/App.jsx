import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Siema maja</h1>
      <button onClick={incrementCounter}>hejka {counter} </button>
    </div>
  )
}

export default App
