import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import './App.css'
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue)=>[...currValue , { name: itemName, dueDate: itemDueDate }]); //this is done in this way such that it will always get the currnet value as react is asynchronous , and this is said as functional update rather than only spread operator
  }

  const handleDeleteItem = (todoItemName) => {
    const updatedTodoItems = todoItems.filter(item => (item.name !== todoItemName));
    setTodoItems(updatedTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} deletionHandled={handleDeleteItem} />
    </center>
  )
}

export default App
