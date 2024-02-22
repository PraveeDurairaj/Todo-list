import React from 'react'

const InputItems = ({task ,deleteTask}) => {
  return (
    <div className='task'>
      <p>{task.taskName}</p>
      <button onClick={()=>deleteTask(task.taskName)}>delete</button>
    </div>
  )
}

export default InputItems
