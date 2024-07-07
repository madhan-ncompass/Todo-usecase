import "./TodoCartList.css";
import { useContext } from "react";
import { TodoList } from "../../../components/TodoList";
import { TodoContext } from "..";

const TodoCartList = () => {
  const {
    inputArrayCopy,
    handleDeleteCompletedItem,
    handleFilter,
    styleTheme,
  } = useContext(TodoContext);

  const uncheckedItemCount = inputArrayCopy.filter(
    (item) => !item.isChecked
  ).length;
  const deleteCompletedItem = () => {
    handleDeleteCompletedItem();
  };
  const showCompletedItem = () => {
    handleFilter("completed");
  };
  const showAllTodoItem = () => {
    handleFilter("all");
  };
  const showActiveItem = () => {
    handleFilter("active");
  };

  return (
    <div
      className="todo-list-component"
      style={{ backgroundColor: styleTheme.backgroundColor }}
    >
      <TodoList />
      <div
        className="todo-list-footer"
        style={{ backgroundColor: styleTheme.backgroundColor }}
      >
        <p>{uncheckedItemCount} items left</p>
        <div
          className="todo-list-filter"
          style={{ backgroundColor: styleTheme.backgroundColor }}
        >
          <button onClick={showAllTodoItem}>All</button>
          <button onClick={showActiveItem}>Active</button>
          <button onClick={showCompletedItem}>Completed</button>
        </div>
        <p className="clear-completed-btn" onClick={deleteCompletedItem}>
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export { TodoCartList };
