import { useState } from 'react'
import './App.css'

import AddBook from "./AddBook";
import DeleteBook from "./DeleteBook";
import ToggleStatus from "./ToggleStatus";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <h2>Book Reading Manager</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() =>
          AddBook(items, input, setItems, setInput, setError)
        }
      >
        Add Book
      </button>

      <p style={{ color: "red" }}>{error}</p>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.read ? "Reading" : "Completed"}

            <button
              onClick={() => ToggleStatus(index, items, setItems)}
            >
              {item.read ? "Mark Completed" : "Mark Reading"}
            </button>

            <button
              onClick={() => DeleteBook(index, items, setItems)}
            >
              Delete Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;