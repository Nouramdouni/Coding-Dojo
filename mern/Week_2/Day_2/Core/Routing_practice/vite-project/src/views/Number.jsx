import React from 'react' 
import { useNavigate,useParams } from 'react-router-dom'


const Number = () => { 
    const {num}=useParams()
  return (
    <div><h1>the Number is :{num}</h1></div>
  )
}

export default Number