import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-item-store';
import styles from './css-files/WelcomeMessage.module.css'


const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
 
  return (
    todoItems.length === 0 &&
    <div className={styles.welcome}>
      Enjoy your Day...!
    </div>
  )
}

export default WelcomeMessage
