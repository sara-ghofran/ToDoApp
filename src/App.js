import {useState} from 'react'
import './App.css';
import Input from './component/Input'
import Output from './component/Output'

 
function App() {
  const [inputText,setInputText]= useState("")
  const [ToDos,setToDos]= useState([])
  return (
    <div className="App">
      <div className="parent">
      <h1>Sara's ToDoApp</h1>
      <Input value={inputText} inputText={inputText} ToDos={ToDos} setToDos={setToDos} setInputText={setInputText}/>
      <Output setToDos={setToDos} ToDos={ToDos}/>
      </div>
    </div>
  );
}

export default App;
