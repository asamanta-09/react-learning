import styles from './Fooditem.module.css'

const FoodInput = ({handleKeyDown}) => {
  return (
    <div>
      <input type="text" placeholder='Enter the food item here' className={styles.foodinput} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default FoodInput
