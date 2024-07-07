import "./TextField.css";
import { TodoContext } from "../../views/TodoContainer";
import { useState, useContext } from "react";
const TextField = () => {
  const { handleInputText, styleTheme } = useContext(TodoContext);

  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: any) => {
    setInputText(event.target.value);
  };

  const handleEnterPress = (event: any) => {
    if (event.key === "Enter" && inputText) {
      handleInputText(inputText);
      setInputText("");
    }
  };

  return (
    <>
      <div
        className="text-field-container"
        style={{ backgroundColor: styleTheme.backgroundColor }}
      >
        <button
          style={{ backgroundColor: styleTheme.backgroundColor }}
        ></button>
        <input
          style={{
            backgroundColor: styleTheme.backgroundColor,
            color: styleTheme.textColor,
          }}
          placeholder="Create a new todo"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        ></input>
      </div>
    </>
  );
};

export { TextField };
