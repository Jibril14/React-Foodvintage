import React from "react";
import Auxi from "../../Hoc/Auxi";
import classes from "./Layout.module.css";
const layout = (props) => (
    <Auxi>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.main}>{props.children}</main>
    </Auxi>
);

export default layout;
