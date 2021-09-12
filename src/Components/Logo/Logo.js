import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => (
    <div className={classes.logo} style={{ height: props.height }}>
        <a href={props.link}>
            <h4>FoodVintage</h4>
        </a>
    </div>
);

export default logo;
