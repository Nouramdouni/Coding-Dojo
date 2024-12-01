import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box_generatar from './components/Box_generatar'
import { Box_xp } from './components/Box_xp'

function App() {
  const [box_color, setBox_color] = useState([]) 
  const updateBox=(newBox)=>{
    setBox_color([...box_color,newBox]);

    
  }


  return (
    <>
     <Box_generatar updateBox={updateBox} /> 
     <Box_xp />
    </>
  )
}

export default App
