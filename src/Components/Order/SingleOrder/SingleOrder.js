import React from "react";
import classes from "./SingleOrder.module.css";

const singleOrder = (props) => {
    const foods = []; // array with food obj in it
    for (let foodName in props.foods) {
        foods.push({
            name: foodName,
            count: props.foods[foodName]
        });
    }

    const foodOutput = foods.map((id) => {
        // map out elem of the array
        return (
            <span style={{ textTransform: "capitalize", margin: "0 8px" }}>
                {id.name} ({id.count})
            </span>
        );
    });
    return (
        <div className={classes.Order}>
            <p>Food: {foodOutput}</p>
            <p>
                Price: <strong>$ {props.price.toFixed(2)}</strong>(1)
            </p>
        </div>
    );
};
export default singleOrder;
