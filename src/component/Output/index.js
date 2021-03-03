import React from 'react'
import './output.css'
import Todo from '../ToDoItem'

const output =({ToDos,setToDos})=>{
   
    return  ( 
    <div className='output'>
        <div className='todolist'>
            {ToDos.map((todo)=>(
                <Todo 
                ToDos={ToDos}
                setToDos={setToDos}
                todo={todo}
                key={todo.id} 
                text={todo.text}/>
            ))}
            
        </div>
    </div>
    )};
export default output