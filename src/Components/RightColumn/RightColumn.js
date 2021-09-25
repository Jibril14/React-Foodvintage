import React from "react";
import classes from "./RightColumn.module.css";

const rightColumn = (props) => (
    <div className={classes.rightColumn}>
        <div className={classes.rightCols}>{props.children}</div>
    </div>
);

export default rightColumn;
