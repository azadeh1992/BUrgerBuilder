import React from 'react';
import PropTypes from "prop-types";
 import "./BurgerIngrediant.css"
//  import classes from "./BurgerIngrediant.css"

const burgerIngrediant = (props) => {
  let ingrediant = null;

  switch(props.type) {
    case("BreadBottom"):
      ingrediant = <div className="BreadBottom"></div>;
      break;
      case("BreadTop"):
      ingrediant = (<div  className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>);
      break;
      case("Meat"):
      ingrediant = <div className="Meat"></div>;
      break;
      case("Cheese"):
      ingrediant = <div className="Cheese"></div>;
      break;
      case("Salad"):
      ingrediant = <div className="Salad"></div>;
      break;
      case("Bacon"):
      ingrediant = <div className="Bacon"></div>;
      break;
      default:
        ingrediant = null;
  }
  return (
     ingrediant
  );
}
 

burgerIngrediant.PropTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngrediant;