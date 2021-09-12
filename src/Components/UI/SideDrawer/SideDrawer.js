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
                    <NavList className={classes.Navlist}>Homee</NavList>
                    <NavList className={classes.Navlist}>Jessi</NavList>
                </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;
