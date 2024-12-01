import React from 'react'
import { UserContext } from "../App"; 
import { useContext } from "react"; 
import "../style/From_Navbar.css";
// in when  we use "useContext(UserContext);"  they biring to import  2 import { UserContext } from "../App"; import { useContext } from "react";
const Navbar = () => { 
    const { name } = useContext(UserContext);
  return (
    <div className='navbar'>  
        Hi!! {name}

    </div>
  )
}

export default Navbar