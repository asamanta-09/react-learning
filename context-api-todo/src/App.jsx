import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import './App.css'
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"
import { TodoItemsContext } from "./store/todo-item-store"

//we use the context when multiple components uses the same state

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [...currValue, { name: itemName, dueDate: itemDueDate }]); //this is done in this way such that it will always get the currnet value as react is asynchronous , and this is said as functional update rather than only spread operator
  }

  const deleteItem = (todoItemName) => {
    const updatedTodoItems = todoItems.filter(item => (item.name !== todoItemName));
    setTodoItems(updatedTodoItems);
  }

  return (
    //when the key and value are same in an object then there is a javascript shortcut by which we can just use the value as the key and value both
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}> 
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  )
}

export default App
