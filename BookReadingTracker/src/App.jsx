import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import {AddBook} from "./AddBook";
import {DeleteBook} from "./DeleteBook";
import {ToggleStatus} from "./ToggleStatus";
import { DeleteItem } from '../../GroceryListManager/src/Components/DeleteItem';

function App() {
  const[items,setItems]=useState([]);
  const[input,setInput]=useState("");
  const[error,setError]=useState("");

  return (
    <div>
      <h2>Bood Reading Manager</h2>

      <input
      type="text"
      value={input}
      onChange={(e)=> setInput(e.target.value)}>
      </input>

      <button onClick={()=>
        AddBook(items,input,setItems,setInput,setError)
      }>
      Add Book
      </button>
      <p style={{ color: "red" }}>{error}</p>

      <ul>
        {items.map((item,index)=>(
          <li key={index}>
            {item.name}-{item.read ? "Reading": "Completed"}

            <button 
            onClick={()=> ToggleStatus(index,item,setItems)}>
              {item.read ? "Mark Reading":"Mark Completed"}
            </button>

            <button
            onClick={()=> DeleteBook(index,item,setItems)}>
              Delete Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
