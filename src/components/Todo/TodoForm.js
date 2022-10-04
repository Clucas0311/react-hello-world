import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [newTodo, setTodo] = useState("");
  const addTodoChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    onAddTodo(newTodo);
    setTodo("");
  };
  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <div>
        <label>Add New Todo:</label>
        <input type="text" value={newTodo} onChange={addTodoChangeHandler} />
      </div>
      <div>
        <button type="submit">add new todo item</button>
      </div>
    </form>
  );
};

export default TodoForm;
