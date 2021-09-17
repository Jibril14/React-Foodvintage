import React from "react";
import classes from "./Navigation.module.css";
import NavList from "./NavList/NavList";

const navigation = () => (
    <ul className={classes.navigation}>
        <NavList link="/">Home</NavList>
        <NavList link="/order">Your Orders</NavList>
    </ul>
);

export default navigation;
