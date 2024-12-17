import React from 'react'

const Dispaly = ({userTask,setUserTask}) => {
    const delte=(index)=>{ 
        const filettaske=userTask.filter((userTask,i)=>i=index) 
        setUserTask(filettaske)
    } 
    const update=(index)=>{
        const updated=[...userTask]
        updated[index].status= !userTask[index].status
        setUserTask(updated) 
    }
  return (
    <div>
    {todos.map((todos,i)=>
        <div key={i} className='container d-flex gap-2 align-items-center'>
            <p style={{textDecoration:userTask.status?"line-through":"None"}}>{userTask.content}</p>
            <input type='checkbox' onChange={()=> update(i)} checked={userTask.status} />  
            <button className='btn btn-danger' onClick={()=>delte(i)}>X</button>
        </div>
        
    )}
</div>
  )
}

export default Dispaly