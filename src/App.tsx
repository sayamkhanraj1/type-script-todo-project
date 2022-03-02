import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';

interface Todo {
  id: number,
  text: string,
}
type ActionType = {type: "ADD"; text: string} | {type: "DELETE"; id: number}
function App() {

function reducer(state: Todo[], action: ActionType) {
 switch (action.type) {
   case "ADD":
     return [
       ...state,
       {
         id: state.length,
         text: action.text,
       }
     ];
     case "DELETE":
       return state.filter(({id}) => id !== action.id);
 }
}
const [todos, dispatch] = useReducer(reducer, []);

useEffect(() =>{
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])

const getLocalItems = () =>{
  let list = localStorage.getItem('todos');

  if(list) {
    return JSON.stringify(localStorage.getItem('todos'));
  } else {
    return [];
  }
}

const todoRef = useRef<HTMLInputElement>(null);
const addTodo = () =>{
 if(todoRef.current){
  dispatch({
    type: "ADD",
    text: todoRef.current.value
  })
  todoRef.current.value = "";
 }
}
return (
     <div className="text-center mt-5">
     <input type="text" ref= {todoRef} />
      <button className="btn-reguler" onClick={addTodo}>ADD</button>
      {
        todos.map((todo) => (
          <div className="item-text" key={todo.id}>
            {todo.text}
            <button className="btn-reguler2" onClick={() => dispatch({type: "DELETE", id: todo.id})}>Remove</button>
          </div>
        ))
      }
     </div>
  );
}

export default App;
