import React from "react";
import classes from "./NavList.module.css";

const navList = (props) => (
    <li className={classes.navList}>
        <a href={props.link} className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>
);

export default navList;
