import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectCounters from './components/UseEffectCounters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseEffectCounters />
    </>
  )
}

export default App
