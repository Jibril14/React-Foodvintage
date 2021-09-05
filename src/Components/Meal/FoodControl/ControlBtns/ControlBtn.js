import React from "react";
import classes from "./ControlBtn.module.css";

const controlBtn = (props) => (
    <div className={classes.foodcontrolbtn}>
        <div className={(classes.btn, classes.label)}>{props.label}</div>
        <button
            className={(classes.btn, classes.less)}
            onClick={props.removed}
            disabled={props.disabledL}
        >
            Less
        </button>

        <button
            className={(classes.btn, classes.more)}
            onClick={props.added}
            disabled={props.disabledM}
        >
            More
        </button>
    </div>
);

export default controlBtn;
