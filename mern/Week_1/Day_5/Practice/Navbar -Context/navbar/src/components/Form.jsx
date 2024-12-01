import React from 'react'
import { UserContext } from "../App"; 
import { useContext } from "react"; 


const Form = () => { 
    const { name, setName } = useContext(UserContext);
  return (
    <div className='from'>
        <label htmlFor="">Name:</label> 
        <input  value={name} onChange={e=> setName(e.target.value)} />
    </div>
  )
}

export default Form