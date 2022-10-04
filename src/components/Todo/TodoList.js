import React from "react";

const TodoList = ({ todos }) => {
  const newArr = todos.map((todo) => console.log(todo));
  console.log("todos", newArr);

  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return <h3 key={index}>{todo}</h3>;
        })
      ) : (
        <h3>No items to todo</h3>
      )}
    </div>
  );
};

export default TodoList;
