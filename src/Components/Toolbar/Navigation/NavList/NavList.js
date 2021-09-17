import React from "react";
import classes from "./NavList.module.css";
import { Link } from "react-router-dom";

const navList = (props) => (
    <li className={classes.navList}>
        <Link activeClassName={classes.active} to={props.link} exact>
            {props.children}
        </Link>
    </li>
);

export default navList;
