import React from "react";
import classes from "./Category.module.css";
import { NavLink } from "react-router-dom";

const category = () => (
    <div className={classes.category}>
        <NavLink to="/">
            <div className={classes.link}>
                <i class="fas fa-cheese"></i>
                <h4>Breakfast</h4>
            </div>
        </NavLink>
        <NavLink to="/lunch">
            <div className={classes.link}>
                <i class="fas fa-ice-cream"></i>
                <h4>Launch</h4>
            </div>
        </NavLink>
        <NavLink to="/dinner">
            <div className={classes.link}>
                <i class="fas fa-utensils"></i>
                <h4>Dinner</h4>
            </div>
        </NavLink>
    </div>
);

export default category;
