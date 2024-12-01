import React, { useState } from 'react'

export const Box_xp = () => 
{
    const [box_color, setBox_color] = useState([])
    const [color, setColor] = useState("")
    const [size, setSize] = useState(0)
    const [box_size, setBox_size] = useState(0)


    const submitHandler = (e) => {
        e.preventDefault();
        setBox_color([...box_color, color])
        setBox_size([...box_size, size])

        console.log(box_color);
    }

        return (
            <div><form onSubmit={submitHandler}>
                <h1> Box Generator Master</h1>
                <label> color</label>
                <input name="color" onChange={(e) => setColor(e.target.value)} />
                <br />
                <label> Size (pixels)</label>
                <input name="size" onChange={(e) => setSize(e.target.value)} />
                <br />
                <button> Add</button>

            </form>
                <div>
                {box_color.map((color,index)=>{ 
                    
                    return <div key={index}
                     style={{display:"inline-block", 
                     margin:"50px",height:"50px",
                     width:"50px", backgroundColor:color}}>
                    </div>})}
                </div>
            </div>)
        
 }
