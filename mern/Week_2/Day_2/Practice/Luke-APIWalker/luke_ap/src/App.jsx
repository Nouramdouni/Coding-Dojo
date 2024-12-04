import { useState } from 'react'
import Home from './views/Home'
import './App.css'
import { Route,Routes } from 'react-router-dom' 
import From from './views/From' ;


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Routes>
        <Route path='/home/:type/:id' element={<Home/>}></Route> 
        <Route path='/' element={<From/>}></Route>

      </Routes>
    </>
  )
}

export default App
