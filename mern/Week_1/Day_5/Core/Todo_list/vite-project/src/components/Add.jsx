import React from 'react'

const Add = (props) => { 
    const {addTask}=props 
    // const{task}=props  
    const [task,setTask]=useState("") 

    const SubmitTaks=(e)=>{

        e.preventDefault();  
        setTask("");


    }
  return (
    <div><form onSubmit={SubmitTaks} > 
        <input type="text" />
        <button className='btn btn-primary'>Add</button>  
        </form>
        <div>
            <p> <input type="checkbox"/> 
            {if}
            </p>  
            <button className='btn btn-dark'>Delete</button>

        </div>
        </div> 
         
  )
}

export default Add