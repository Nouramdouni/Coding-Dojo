import React from 'react'
import '../assets/style/MainContent.css'
import Subcontent from './Subcontent'
import Advertisement from './Advertisement'

const MainContent = () => {
  return (
    <div className='main'>  
    <div className='subcon'>
        <Subcontent/> 
        <Subcontent/>
        <Subcontent/>
    </div> 
    <div>
        <Advertisement></Advertisement>
    </div>
    </div>
    
  )
}

export default MainContent