import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello Dojo</h1> 
      <h2> thing i need to do :</h2> 
      <ul>
        <li>learn React </li>
        <li>cilme mt everst </li>
        <li>run a marbthon</li>
        <li>feed the dogs</li>
      </ul>
    </>
  )
}

export default App
