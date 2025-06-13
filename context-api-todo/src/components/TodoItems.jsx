import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";
import css from './css-files/TodoItems.module.css';

const TodoItems = () => {
  /* const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems; //can be written in single line by object destructuring as below */
  const { todoItems } = useContext(TodoItemsContext);

  return <>
    <div className={css["item-container"]}>
      {todoItems.map(item => (
        <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  </>
}

export default TodoItems;