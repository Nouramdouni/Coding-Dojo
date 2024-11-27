import React, { useState } from 'react'

const Article = (props) => {
    const [fontage,setfontage]=useState(props.age) 
    const {firstName,lastName,age,hair_Color}=props


    const InCreaseAge=()=>{
        setfontage(fontage+1)
    }
  return (
    <div className='bithday'> 
    <p>{firstName}, {lastName}</p>
    <p>age : {fontage}</p>
    <p>Hair Color : {hair_Color}</p>
    <button onClick={InCreaseAge}>bithday button for {firstName},{lastName}</button>
    </div>
  )
}

export default Article