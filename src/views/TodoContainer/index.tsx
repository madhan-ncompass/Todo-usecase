import { createContext, useState } from "react";
import { TodoCart } from "./AddTodo";
import { TodoItem, ContextType, StyleTheme } from "../../models/types";
import { TodoCartList } from "./TodoListContainer";
const TodoContext = createContext({} as ContextType);
const TodoContainer = ({
  handleTheme,
  styleTheme,
}: {
  handleTheme: (theme: string) => void;
  styleTheme: StyleTheme;
}) => {
  const [inputArray, setInputArray] = useState<TodoItem[]>([]);
  const [inputArrayCopy, setInputArrayCopy] = useState<TodoItem[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleThemeColor = () => {
    if (!isDarkTheme) {
      handleTheme("dark");
    } else {
      handleTheme("light");
    }
    setIsDarkTheme(!isDarkTheme);
    setIsLightTheme(!isLightTheme);
  };

  const handleInputText = (inputText: string) => {
    setInputArray([
      ...inputArray,
      { text: inputText, isChecked: false, isDeleted: false },
    ]);
    setInputArrayCopy([
      ...inputArrayCopy,
      { text: inputText, isChecked: false, isDeleted: false },
    ]);
  };

  const handleItemAction = (index: number, option: string) => {
    const updatedArray = [...inputArray];

    switch (option) {
      case "checked":
        updatedArray[index] = {
          ...updatedArray[index],
          isChecked: !updatedArray[index].isChecked,
        };
        break;
      case "delete":
        updatedArray[index] = {
          ...updatedArray[index],
          isDeleted: true,
        };
        break;
      default:
        break;
    }

    setInputArray(updatedArray);
    setInputArrayCopy(updatedArray);
  };

  const handleDeleteCompletedItem = () => {
    const updatedArray = inputArray.filter((item) => {
      if (item.isChecked) {
        return false;
      }
      return true;
    });
    setInputArray(updatedArray);
    setInputArrayCopy(updatedArray);
  };

  const handleFilter = (option: string) => {
    let updatedArray: TodoItem[] = [];

    switch (option) {
      case "completed":
        updatedArray = inputArray.filter((item) => item.isChecked);
        break;
      case "active":
        updatedArray = inputArray.filter((item) => !item.isChecked);
        break;
      case "all":
        updatedArray = inputArray.filter((item) => !item.isDeleted);
        break;
      default:
        console.log("Invalid filter option");
    }

    setInputArrayCopy(updatedArray);
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          inputArrayCopy,
          handleItemAction,
          handleDeleteCompletedItem,
          handleFilter,
          handleThemeColor,
          handleInputText,
          isDarkTheme,
          isLightTheme,
          styleTheme,
        }}
      >
        <TodoCart />
        <TodoCartList />
      </TodoContext.Provider>
    </>
  );
};

export { TodoContainer };
export { TodoContext };
