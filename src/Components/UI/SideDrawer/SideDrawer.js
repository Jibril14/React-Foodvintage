import React from "react";
import Logo from "../../Logo/Logo";
import NavList from "../../Toolbar/Navigation/NavList/NavList";
import classes from "./SideDrawer.module.css";
import Auxi from "../../../Hoc/Auxi";
import Backdrop from "../Backdrop/Backdrop";

const sideDrawer = (props) => {
    let cssClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        cssClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={cssClasses.join(" ")}>
                <Logo link="/" height="auto" style={{ textAlign: "left" }} />

                <nav>
                    <p className={classes.Link}>
                        <NavList link="/">Home</NavList>
                    </p>
                    <p className={classes.Link}>
                        <NavList link="/order">Orders</NavList>
                    </p>
                    <p className={classes.Link}>
                        <NavList link="/join-us">Connect</NavList>
                    </p>
                </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;
