import React from "react";
import Auxi from "../../../Hoc/Auxi";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const foodToOrder = Object.keys(props.foodOrder).map((valueId) => {
        return (
            <li key={valueId}>
                <span style={{ textTransform: "capitalize" }}>{valueId}</span>
                <span> {props.foodOrder[valueId]}</span>
            </li>
        );
    });
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p> Delicious Meal, Enjoy Your Launch</p>
            <ul>{foodToOrder}</ul>
            <p>
                <strong>Total Price: ${props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.orderCancelling}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.orderContinueing}>
                Continue
            </Button>
        </Auxi>
    );
};

export default orderSummary;
