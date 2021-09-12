import React from "react";
import classes from "./ToggleBtn.module.css";

const toggleBtn = (props) => (
    <div className={classes.ToggleBtn} onClick={props.clicked}>
        ☰
    </div>
);

export default toggleBtn;
