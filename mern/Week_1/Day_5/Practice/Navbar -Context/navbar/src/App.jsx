import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import Form from './components/Form'

const UserContext = createContext()
export { UserContext }
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("hii");
  return (
    <>
    <UserContext.Provider value={{
      name,
      setName
    }}>
      <Navbar />
      <Form />
    </UserContext.Provider>
    </>
  )
}

export default App
