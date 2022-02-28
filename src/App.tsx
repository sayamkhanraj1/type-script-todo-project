import { useReducer, useRef } from 'react';
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
    <div className="App">
      <input type="text" ref= {todoRef} />
      <button onClick={addTodo}>Add</button>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
          </div>
        ))
      }
    </div>
  );
}

export default App;
