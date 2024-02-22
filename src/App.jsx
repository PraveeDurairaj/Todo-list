import { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';
import InputItems from './inputItems';

function App() {
   const [todoList,setTodoList] = useState([])

   const addTask = (taskName) =>{
    const newTask = {taskName}
    setTodoList([...todoList, newTask])
   }
   //delete function 
   function deleteTask(deleteTaskName){
    setTodoList(todoList.filter(task=>task.taskName !== deleteTaskName))
   }
  return (
    <>
    <div className="main-container">
       <h1>ToDo List</h1>
      <TaskInput addTask = {addTask} />

      <div className="todoList">
        <ul className='task-container'>
          {todoList.map((items,key)=> (<InputItems task={items} key={key} deleteTask={deleteTask} />))}
        </ul>
      </div>
    </div>
    
    </>
  );
}

export default App;
