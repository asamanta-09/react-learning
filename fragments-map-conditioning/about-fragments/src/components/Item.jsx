import styles from './Item.module.css'

const Item = ({foodItem , bought , handledBuyButton}) => {
  return (
    <li className={`${styles['my-item']} list-group-item ${bought && 'active'}`}>
      <span className={styles['my-span']}>{foodItem}</span>
      <button className={`${styles.button} btn btn-secondary`} onClick={handledBuyButton}>Buy Now</button>
    </li>
  );
}

export default Item;