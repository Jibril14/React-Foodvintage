import React from "react";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const logo = (props) => (
    <div className={classes.logo} style={{ height: props.height }}>
        <NavLink to={props.link}>
            <h4>FoodVintage</h4>
        </NavLink>
    </div>
);

export default logo;
