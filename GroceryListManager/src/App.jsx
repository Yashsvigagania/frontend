import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import { AddItem } from "./AddItem";
import { DeleteItem } from "./DeleteItem";
import { TogglePurchased } from "./TogglePurchased";

function App() {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <h2>Grocery List Manager</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() =>
          AddItem(input, items, setItems, setInput, setError)
        }
      >
        Add Item
      </button>

      <p style={{ color: "red" }}>{error}</p>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.purchased ? "Purchased" : "Not Purchased"}

            <button
              onClick={() => TogglePurchased(index, items, setItems)}
            >
              {item.purchased ? "Mark Not Purchased" : "Mark Purchased"}
            </button>

            <button
              onClick={() => DeleteItem(index, items, setItems)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App
