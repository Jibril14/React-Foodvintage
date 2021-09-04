import React from "react";
import classes from "./FoodControlBtn.module.css";
const foodControlBtn = (props) => (
    <div className={classes.foodcontrolbtn}>
        <div className={(classes.btn, classes.label)}>{props.label}</div>
        <button className={(classes.btn, classes.less)}>Less</button>
        <button className={(classes.btn, classes.more)}>More</button>
    </div>
);

export default foodControlBtn;
