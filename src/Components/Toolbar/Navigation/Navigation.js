import React from "react";
import classes from "./Navigation.module.css";
import NavList from "./NavList/NavList";

const navigation = () => (
    <ul className={classes.navigation}>
        <NavList link="/" active>
            Home
        </NavList>
        <NavList link="/">Checkout</NavList>
    </ul>
);

export default navigation;
