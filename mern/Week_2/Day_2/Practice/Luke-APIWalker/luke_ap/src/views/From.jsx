import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const From = () => { 
    const[type,setType]=useState("people");
    const[id,setId]=useState(0) 
    const navigate=useNavigate(); 
    const SubmitHandler=(e)=>{ 
        e.preventDefault();
        navigate(`/home/${type}/${id}`);
        setType("people")
        setId(0)
    }
    return (
        <div>
            <form onSubmit={SubmitHandler} >
            <label > 
                search fro : 
            </label> 
            <select name="type" value={type} id="" onChange={(e)=>setType(e.target.value)}>  
                <option value=""></option>
                <option value="people"> People</option> 
                <option value="planets"> planets</option>
                
                
            </select> 
            <label >ID</label> 
            <input  value={id} onChange={(e)=>setId(e.target.value)}></input> 
            <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default From
