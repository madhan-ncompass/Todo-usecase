import React, { useState } from "react";
import "./App.css";
import { StyleTheme } from "./models/types";
import { TodoContainer } from "./views/TodoContainer";
import { lightTheme, darkTheme } from "./components/Theme/theme";

const App = () => {
  const [styleTheme, setStyleTheme] = useState<StyleTheme>(darkTheme);
  const handleTheme = (theme: string) => {
    setStyleTheme(theme === "dark" ? darkTheme : lightTheme);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: styleTheme.bodyBackgroundColor }}
    >
      <img src={styleTheme.imgsrc} alt="background-img" />
      <TodoContainer handleTheme={handleTheme} styleTheme={styleTheme} />
    </div>
  );
};

export default App;
