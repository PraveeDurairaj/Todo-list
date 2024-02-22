import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
    const [task,setTask] = useState('');
    
   function handleAddTask(e){
    e.preventDefault();
        addTask(task)
        setTask('')
        
    }
  return (
   <form className='input-container' onSubmit={handleAddTask}>
    <input type="text" placeholder='Add Item...' onChange={(e)=>{setTask(e.target.value)}} value={task}  />
    <button onClick={handleAddTask}>Add</button>
   </form>
  )
}

export default TaskInput

