import React, { Component } from "react";
import Auxi from "../../Hoc/Auxi";
import Meal from "../../Components/Meal/Meal";
import FoodControl from "../../Components/Meal/FoodControl/FoodControl";
class Restaurant extends Component {
    state = {
        foods: {
            rice: 0,
            chicken: 0,
            carrot: 0
        }
    };

    render() {
        return (
            <Auxi>
                <Meal foodMenu={this.state.foods} />
                <FoodControl />
            </Auxi>
        );
    }
}

export default Restaurant;
