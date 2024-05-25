import './App.css'
import { useState } from 'react'

import Contador from './components/contador'
import ContadorC from './components/contadorC'

function App() {
  const [count, setCount] = useState(0)

  function add(){
    setCount(count + 1)
  }

  return (
    <>
      <Contador/>
      <Contador/>

      <ContadorC count={count} add={add}/>
      <ContadorC count={count} add={add}/>
    </>
  )
}

export default App
