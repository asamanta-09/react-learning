import Item from "./Item";
import { useState } from "react";

const FoodItem = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton=(item,event)=>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
  }

  return (
    <ul className="list-group"> 
      {items.map((item) => (
        <Item key={item} foodItem={item} bought={activeItems.includes(item)} handledBuyButton={(event)=>{onBuyButton(item,event)}} />
      ))}
    </ul>
  ); 
};
export default FoodItem;