
import FoodItem from './components/Fooditem';
import ErrorMessage from './components/ErrorMessage';
import './App.css'
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  //let foodItems = ['fruits', 'vegitables', 'grocery', 'masala', 'snacks'];
  //let foodItems=[];
  let [foodItems, setFoodItems] = useState([])

  //let emptyMessage=foodItems.length===0? <h3>List of food is empty</h3> : null;  //condition using ternary operator
  //conditioning also can be done using the concept of if-else

  const onKeyDown = (e) => {
   if(e.key === 'Enter'){
    let newFooditem=e.target.value;
    e.target.value="";
    let newItems=[...foodItems,newFooditem];
    setFoodItems(newItems);
   }
  }

  return (
    <>
      <Container>
        <h1>List of foods</h1>
        {/* {emptyMessage} //part of ternary operator  */}
        <ErrorMessage items={foodItems} />
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItem items={foodItems} />
      </Container>
    </>
  )
}

export default App


//this is used here to warp multiple tags known as fragments, and it is the short form to write react fragments  <> element </>
//also learned about map 
//know about how to do conditioanl redering