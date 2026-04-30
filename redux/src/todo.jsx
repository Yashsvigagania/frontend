import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo, toggle } from "./action";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addtodo(text));
    setText("");
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((item) => (
          <li key={item.id} style={{ margin: "10px 0" }}>
            <span
              onClick={() => dispatch(toggle(item.id))}
              style={{
                cursor: "pointer",
                textDecoration: item.completed ? "line-through" : "none",
                marginRight: "10px"
              }}
            >
              {item.text}
            </span>

            <button onClick={() => dispatch(deletetodo(item.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;