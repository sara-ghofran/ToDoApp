import React from 'react'
import './todoitem.css'



const Todo =({text,todo,setToDos,ToDos})=>{
    //events 
    const deleteHandler =()=>{
        setToDos(ToDos.filter(el=>el.id!==todo.id))
        }
        const completeHandler =()=>{
            setToDos(ToDos.map((item)=>{
                if(item.id===todo.id){
                    return {...item,completed:!item.completed}
                }
                return item ;
            }))
            }
    return (
        <div className="todo">
            <div className={`todoitem ${todo.completed ? "completed" : ""}`}>{text}</div>
            <div onClick={completeHandler}className='check-btn'>
                <i className='fas fa-check'></i></div>
            <div onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i></div>
                
        </div>

    );
}

export default Todo;