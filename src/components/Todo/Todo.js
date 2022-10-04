import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todo) => {
    setTodoList((prevTodoList) => {
      return [todo, ...prevTodoList];
    });
  };
  return (
    <div className="todo">
      <h1>Todo</h1>
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} />
    </div>
  );
};

export default Todo;
