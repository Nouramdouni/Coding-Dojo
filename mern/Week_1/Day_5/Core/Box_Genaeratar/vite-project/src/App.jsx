import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box_generatar from './components/Box_generatar'
import { Box_xp } from './components/Box_xp'

function App() {
  const [count, setCount] = useState(0) 
  

  return (
    <>
     <Box_generatar/> 
     <Box_xp/>
    </>
  )
}

export default App
