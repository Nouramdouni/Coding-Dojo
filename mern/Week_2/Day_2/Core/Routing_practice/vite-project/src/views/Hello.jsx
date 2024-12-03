import React from 'react' 
import {useParams } from 'react-router-dom'

const Hello = () => { 
    const {word}=useParams() 
    const {col1}=useParams() 
    const{col2}=useParams()

  return (
    <div><h1>The word is:</h1> {word}</div>
  )
}

export default Hello