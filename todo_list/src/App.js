import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodoText = todoInput.trim();
    if (!newTodoText) return; // Prevent adding empty todos

    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodoInput(""); // Clear input field after adding todo
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          align="right"
          id="todoAdd"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
