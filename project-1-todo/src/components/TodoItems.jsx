import TodoItem from "./TodoItem";
import css from './css-files/TodoItems.module.css'

const todoItems = ({ todoItems , deletionHandled}) => {
  return <>
    <div className={css["item-container"]}>
      {todoItems.map(item => (
        <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} deletion={deletionHandled} />
      ))}
    </div>
  </>
}

export default todoItems;