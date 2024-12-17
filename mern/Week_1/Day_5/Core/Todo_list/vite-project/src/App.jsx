import { useState } from 'react'

import './App.css'
import Add from './components/Add'
import Dispaly from './components/Dispaly'
function App() {

  const [usertask, setUserTask] = useState([])
  const addTask = (tasks) => {
    setUserTask([...usertask, tasks])
  }
  return (
    <>

      <div className='container p-5 '>
        <Add addTask={addTask} />
        <Dispaly tasks={usertask} setUserTask={setUserTask}></Dispaly>
      </div>
    </>
  )
}

export default App
