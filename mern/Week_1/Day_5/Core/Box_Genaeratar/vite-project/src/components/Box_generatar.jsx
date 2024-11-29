import React, { useState } from 'react'

const Box_generatar = () => {
    const [box_color,setBox_color]=useState([])
    const[color,setColor]=useState("") 
    const submitHandler=(e)=>{
        e.preventDefault();  
        setBox_color([...box_color,color])
        console.log(box_color);
        

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Box Generator</h1>
                <div>
                    <label>Color </label>
                    <input name="color"  onChange={(e)=>setColor(e.target.value)} />
                    <button>Add </button>
                </div>
            </form>
            {/* <div> */}
                {box_color.map((color,index)=>{ 
                    
                    return<div key={index}
                     style={{display:"inline-block", 
                     margin:"50px",height:"50px",
                     width:"50px", backgroundColor:"red"}}>
                    </div>
                })}

            {/* </div> */}
        </div>
    )
}

export default Box_generatar