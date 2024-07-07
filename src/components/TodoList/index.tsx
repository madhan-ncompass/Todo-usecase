import { TodoItem } from "../../models/types";
import { TodoContext } from "../../views/TodoContainer";
import { useContext } from "react";
import "../TextField/TextField.css";
import "./TodoList.css";

const TodoList = () => {
  const { inputArrayCopy, handleItemAction, styleTheme } =
    useContext(TodoContext);

  const handleCheckBoxClick = (index: number) => {
    handleItemAction(index, "checked");
  };

  const deleteTodoItem = (index: number) => {
    handleItemAction(index, "delete");
  };

  return (
    <div
      className="todo-list"
      style={{ backgroundColor: styleTheme.backgroundColor }}
    >
      <div
        className="todo-list-items"
        style={{ height: "370px", overflow: "auto" }}
      >
        {inputArrayCopy.length > 0 ? (
          inputArrayCopy
            .filter((item: TodoItem) => !item.isDeleted)
            .map((item: TodoItem, index: number) => (
              <div className="todo-list-item" key={index}>
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => handleCheckBoxClick(index)}
                />
                <input
                  type="text"
                  disabled
                  value={item.text}
                  style={{
                    backgroundColor: styleTheme.backgroundColor,
                    color: item.isChecked
                      ? "rgba(90,92,115,255)"
                      : styleTheme.textColor,
                    textDecoration: item.isChecked ? "line-through" : "none",
                  }}
                />
                <svg
                  onClick={() => deleteTodoItem(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                >
                  <path
                    fill="#494C6B"
                    fill-rule="evenodd"
                    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                  />
                </svg>
              </div>
            ))
        ) : (
          <div className="emptyList">Empty Todo List</div>
        )}
      </div>
    </div>
  );
};

export { TodoList };
