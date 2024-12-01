import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
function App() {
  const [count, setCount] = useState(0)
  const [usertask,setUserTask]=useState([]) 
  const addTask=(tasks)=>{ 
    setTask([...usertask,tasks]) 
  }


  return (
    <>
     <Add addTask={addTask} task={task}/>
    </>
  )
}

export default App
