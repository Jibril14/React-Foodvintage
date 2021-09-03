import React, { Component } from "react";
import Auxi from "../../Hoc/Auxi";
import Meal from "../../Components/Meal/Meal";

class Restaurant extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Auxi>
                <Meal />
                <div>Food</div>
            </Auxi>
        );
    }
}

export default Restaurant;
