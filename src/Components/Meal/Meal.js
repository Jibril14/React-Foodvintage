import React from "react";
import classes from "./Meal.module.css";
import Food from "./Food/Food";

const meal = () => {
    return (
        <div className={classes.plate}>
            <Food type="rice1" />
            <Food type="rice2" />
            <Food type="rice3" />
            <Food type="chicken1" />
            <Food type="chicken3" />
            <Food type="carrot1" />
            <Food type="carrot2" />
        </div>
    );
};
export default meal;
