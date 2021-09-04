import React from "react";
import classes from "./FoodControl.module.css";
import FoodControlBtn from "./FoodControlBtns/FoodControlBtn";

const controls = [
    { label: "rice", type: "rice" },
    { label: "chicken", type: "chicken" },
    { label: "carrot", type: "carrot" }
];

const foodControl = () => (
    <div className={classes.foodcontrol}>
        {controls.map((val) => (
            <FoodControlBtn key={val.label} label={val.label} />
        ))}
    </div>
);

export default foodControl;
