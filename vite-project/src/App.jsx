import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {

  const nombre = 'Juan'
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card nombre= {nombre}/>
    </div>
  )
}

export default App
