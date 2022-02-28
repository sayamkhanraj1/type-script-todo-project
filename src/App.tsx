import { useReducer } from 'react';
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

return (
    <div className="App">
      
    </div>
  );
}

export default App;
