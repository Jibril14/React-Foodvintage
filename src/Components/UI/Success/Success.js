import React from "react";
import classes from "./Success.module.css";

const success = (props) => (
    <div
        className={classes.success}
        style={{ display: props.showErr ? "block" : "none" }}
    >
        <h3>
            <i></i>Hooray!
        </h3>
        <p>Your Order is on the way.</p>
    </div>
);

export default success;
