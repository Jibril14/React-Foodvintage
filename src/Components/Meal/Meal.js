import React from "react";
import classes from "./Meal.module.css";
import Food from "./Food/Food";

const meal = (props) => {
    let foodTransform = Object.keys(props.foodMenu)
        .map((valueId) => {
            console.log("valueId", valueId);
            return [...Array(props.foodMenu[valueId])].map((_, index) => {
                console.log("index", index);
                return <Food key={valueId + index} type={valueId + index} />;
            });
        })
        .reduce((total, vals) => {
            return total.concat(vals);
        });
    if (foodTransform.length === 0) {
        foodTransform = (
            <p className={classes.plateText}>Please add some food</p>
        );
    }
    console.log("foodtransform", foodTransform);

    return <div className={classes.plate}>{foodTransform}</div>;
};
export default meal;
