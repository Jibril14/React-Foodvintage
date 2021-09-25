import React from "react";
import classes from "./LeftColumn.module.css";

const leftColumn = (props) => (
    <div className={classes.leftColumn}>
        <div className={classes.leftCol}>{props.children}</div>
    </div>
);

export default leftColumn;
