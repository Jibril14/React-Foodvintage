import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ToggleBtn from "../UI/SideDrawer/ToggleBtn/ToggleBtn";
import ButtonImg from "../UI/ButtonImg/ButtonImg";
import { Link } from "react-router-dom";

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <Logo link="/" height="auto" />
        <div style={{ display: "flex" }}>
            <Link to="/join-us">
                <div className={classes.menuLogo}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665029960/FoodApp/images/logo1_mr9qyt.png"
                        alt="foodvintage"
                    />
                </div>
            </Link>
            <div className={classes.menu}>
                <ToggleBtn clicked={props.drawToggle} />
            </div>
        </div>
        <nav className={classes.Nav}>
            <Navigation />
            <ButtonImg />
        </nav>
    </header>
);

export default toolbar;
