import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function addItem() {

    const name = input.trim();

    if (name === "") {
      setError("Item name cannot be empty.");
      return;
    }

    const alreadyExists = items.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      setError("Item already exists in the list.");
      return;
    }

    const newItem = {
      name: name,
      purchased: false
    };

    setItems([...items, newItem]);
    setInput("");
    setError("");
  }

  function deleteItem(index) {
    const newList = items.filter((item, i) => i !== index);
    setItems(newList);
  }

  function togglePurchased(index) {
    const newList = [...items];

    newList[index].purchased = !newList[index].purchased;

    setItems(newList);
  }

  return (
    <div>
      <h2>Grocery List Manager</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <p style={{ color: "red" }}>{error}</p>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.purchased ? "Purchased" : "Not Purchased"}

            <button onClick={() => togglePurchased(index)}>
              {item.purchased ? "Mark Not Purchased" : "Mark Purchased"}
            </button>

            <button onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
