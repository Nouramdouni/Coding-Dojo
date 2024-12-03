import { useState } from 'react'
import './App.css'
import Number from './views/Number'
import Hello from "./views/Hello"
import Home from './views/Home' 
import Helloc from './views/Helloc'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        < Route path='/Number/:num' element={<Number />} />
        <Route path='/Home' element={<Home />}/> 
        <Route path='/:word' element={<Hello />}/>  
        <Route path='/:word/:col1/:col2' element={<Helloc />}/> 

      </Routes>
    </>
  )
}

export default App
