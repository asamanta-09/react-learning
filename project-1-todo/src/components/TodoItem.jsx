import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate ,deletion }) {

  return <div className="container">
    <div className="row my-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2 text-center">
        <button type="button" className="btn btn-danger my-button" onClick={()=>deletion(todoName)}><MdDelete /></button>
      </div> 
    </div>
  </div>
}
 
export default TodoItem;