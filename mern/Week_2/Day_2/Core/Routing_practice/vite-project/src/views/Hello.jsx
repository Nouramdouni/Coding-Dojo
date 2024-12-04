import React from 'react' 
import {useParams } from 'react-router-dom'

const Hello = () => { 
    const {word}=useParams() 
   

  return (
    <div><h1>The word is:</h1> {word}</div>
  )
}

export default Hello