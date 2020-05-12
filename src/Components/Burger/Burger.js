import React from 'react';
import "./Burger.css";
import BurgerIngrediant from "./BurgerIngrediant/BurgerIngrediant"

const burger = (props) => {
  let transformedIngrediants = Object.entries(props.ingrediants);
  console.log(transformedIngrediants)
  // transformedIngrediants.map(ingkey => {
  //   <BurgerIngrediant  type={ingkey[0]} />
  // })
  
  return (
    <div className="Burger">
      <BurgerIngrediant  type="BreadTop" />
     
      
      {/* <BurgerIngrediant  type="Cheese" />
      <BurgerIngrediant  type="Meat" />
      <BurgerIngrediant  type="Salad" /> */}


      <BurgerIngrediant  type="BreadBottom" />
      
    </div>
  );
}
 
export default burger;