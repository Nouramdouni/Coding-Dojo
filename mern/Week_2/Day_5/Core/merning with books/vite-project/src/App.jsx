import { useState } from 'react' 
import { Route,Router, Routes } from 'react-router-dom' 
import Home from './views/Home'
import Carte from './views/Carte'
import Addbooks from './views/Addbooks'


function App() {
  
  return (
    <> 
    <Routes>
     <Route path='/' element={<Home/>} ></Route> 
     <Route path='/book/:id' element={<Carte/>} ></Route> 
     <Route path='/create' element={<Addbooks/>} ></Route>  </Routes> 

    </>
  )
}

export default App