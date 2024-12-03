import React from 'react' 
import {useParams } from 'react-router-dom'

const Helloc = () => { 
    const {word}=useParams() 
    const {col1}=useParams() 
    const{col2}=useParams()

  return (
    <div style={{backgroundColor: col2 ,color: col1}}><h1>The word is:</h1>{word}</div>
  )
}

export default Helloc












































// userParams etjible ey haje ektbthe elfou9e   