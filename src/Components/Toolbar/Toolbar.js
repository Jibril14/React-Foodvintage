import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ToggleBtn from "../UI/SideDrawer/ToggleBtn/ToggleBtn";

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <Logo link="/" height="auto" />
        <div className={classes.menu}>
            <ToggleBtn clicked={props.drawToggle} />
        </div>
        <nav className={classes.navi}>
            <Navigation />
        </nav>
    </header>
);

export default toolbar;
