import React, { useState } from "react";

const DarkMode = () => {
  const [useDarkMode, setDarkMode] = useState(false);

  const switchModeChangeHandler = () => {
    setDarkMode(!useDarkMode);
  };
  return (
    <div className={useDarkMode ? "dark-mode" : "dark-mode light"}>
      <h1>Dark Mode</h1>
      <label>
        <input type="checkbox" onChange={switchModeChangeHandler} />
        <span style={{ marginLeft: "8px" }}>Use dark mode</span>
      </label>
    </div>
  );
};

export default DarkMode;
