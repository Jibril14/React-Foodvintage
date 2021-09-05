import React from "react";
import classes from "./FoodControl.module.css";
import ControlBtn from "./ControlBtns/ControlBtn";

const controls = [
    { label: "rice", type: "rice" },
    { label: "chicken", type: "chicken" },
    { label: "carrot", type: "carrot" }
];

const foodControl = (props) => (
    <div className={classes.foodcontrol}>
        <p>
            Current Price: <strong>{props.price.toFixed(2)}</strong>
        </p>
        {controls.map((val) => (
            <ControlBtn
                key={val.label}
                label={val.label}
                added={() => props.foodAdded(val.type)}
                removed={() => props.foodRemoved(val.type)}
                disabledL={props.disableLess[val.type]}
                disabledM={props.disableMore[val.type]}
            />
        ))}
    </div>
);

export default foodControl;
