import style from './css-files/AddTodo.module.css'
import { useRef } from 'react';
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  }

  return <div className="container">
    <form className="row my-row" onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input className={style["input-box"]} type="text" ref={todoNameElement} placeholder="Enter Todo Here" />
      </div>
      <div className="col-4">
        <input className={style["input-box"]} type="date" ref={dueDateElement} name="date" id="date" />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success my-button" ><IoMdAdd /></button>
      </div>
    </form>
  </div>
}

export default AddTodo;