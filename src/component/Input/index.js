import React from 'react'
import './input.css'
const input =({setInputText,ToDos,setToDos,inputText})=>{
    const inputTextHandler=(e)=>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitToDoHandler=(e)=>{
        e.preventDefault();
        if(inputText!==""){
        setToDos([...ToDos,
            {text:inputText,complited:false,id:Math.random()*1000}
        ]);
        setInputText("");
    }
    }
    return  ( 
    <div className='input'>
     <input value={inputText}
      onChange={inputTextHandler} 
      id="txt" 
      type="text" 
      placeholder="ADD A NEW THING TO DO"/>
     <button onClick={submitToDoHandler} id="btn" type="submit">ADD</button>
    </div>
    )};
export default input