import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
function App() {

  const [usertask,setUserTask]=useState([]) 
  const addTask=(tasks)=>{ 
    setUserTask([...usertask,tasks]) 
  }
  return (
    <>
     <Add addTask={addTask} task={task}/>
    </>
  )
}

export default App
