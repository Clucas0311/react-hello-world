import React from "react";
import Profile from "./components/Profile";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import DarkMode from "./components/DarkMode/DarkMode";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <div className="app">
      <Profile />
      <DarkMode />
      <TicTacToe />
      <Todo />
    </div>
  );
};

export default App;
