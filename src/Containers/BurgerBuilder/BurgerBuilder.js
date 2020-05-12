import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import "./BurgerBuilder.css";
import Burger from "../../Components/Burger/Burger"


class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 2,
      bacon: 1,
      cheese: 2,
      meat:1
    }
  }
  render () {
    return (
     <Aux>
       <Burger ingrediants={this.state.ingrediants}/>
       <div className="BuildCtr">Build Controls</div>
     </Aux>
    )
  }
  
}

export default BurgerBuilder;