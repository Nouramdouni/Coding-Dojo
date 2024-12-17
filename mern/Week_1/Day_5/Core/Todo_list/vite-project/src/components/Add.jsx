import React from 'react'

const Add = ({ addTask }) => {
  const [task, setTask] = useState({ content: "", status: false })
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (task.content.length > 2) {
      addTask(task,)
    }
    setTask({ content: "", status: false })

  }
  return (
    <div>  
      <form onSubmit={SubmitHandler}>
      <div className='col-3'>
        <input className='form-control' type="text" onChange={(e) => setTask({ ...task, content: e.target.value })} value={task.content} /> <br />
        <button className='btn btn-outline-primary'>Add</button>
      </div>
    </form>
    </div>

  )
}

export default Add