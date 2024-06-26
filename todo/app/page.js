import React from "react";
import Sidenav from "./Sidenav";
import Suggestion from "./Suggestion";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-1 grid grid-cols-3 h-inherit">
        <section className=" p-4">
          <Sidenav />
        </section>
        <section className="p-4 bg-blue-800 bg-opacity-60 text-white">
          <TodoList />
        </section>
        <section className=" p-4">
          <Suggestion />
        </section>
      </div>
    </div>
  );
};

export default Home;

/*


"use client";
import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

*/
