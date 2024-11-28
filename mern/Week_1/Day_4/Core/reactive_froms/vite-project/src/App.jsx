import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users'

function App() {
  const [users, setusers] = useState([]);

  //* Let's create a function that allow us to add user in the state
  const addUser =(newUser)=> {
    setusers([...users, newUser])
  }

  return (
    <>
     <Users addUser={addUser} users={users} />
    </>
  )
}

export default App
