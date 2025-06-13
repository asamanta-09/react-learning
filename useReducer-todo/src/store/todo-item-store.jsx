import { createContext, useReducer } from 'react'

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { }
});


const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [...currentTodoItems, { name: action.payload.itemName, dueDate: action.payload.itemDueDate }];
  }
  else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(item => (item.name !== action.payload.itemName));
  }
  return newTodoItems;
}


const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = { type: "NEW_ITEM", payload: { itemName, itemDueDate } };
    dispatchTodoItems(newItemAction);
  }

  const deleteItem = (todoItemName) => {
    const deleteItemAction = { type: "DELETE_ITEM", payload: { itemName: todoItemName } };
    dispatchTodoItems(deleteItemAction);
  }

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  )
}
export default TodoItemsContextProvider;