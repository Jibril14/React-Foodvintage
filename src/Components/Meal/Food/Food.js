import React from "react";
import classes from "./Food.module.css";
import PropTypes from "prop-types";

const restaurantFoods = (props) => {
    let food = null;
    restaurantFoods.propTypes = {
        type: PropTypes.string.isRequired
    };

    //Just pass in type as expression, though switch by default check 4 val & type match
    switch (props.type) {
        case "rice1":
            food = (
                <div className={classes.rice1}>
                    {/* <img
                        src={require("../../../Assets/rice1.png").default}
                        alt="Foodvintage" />
                        or
                        <img src="../../../../Assets/rice2.png" alt="Foodvintage" />
                  */}

                    <img src="../../../../Assets/rice1.png" alt="Foodvintage" />
                </div>
            );
            break;
        case "rice2":
            food = (
                <div className={classes.rice2}>
                    <img src="../../../../Assets/rice2.png" alt="Foodvintage" />
                </div>
            );
            break;
        case "rice3":
            food = (
                <div className={classes.rice3}>
                    <img src="../../../../Assets/rice3.png" alt="Foodvintage" />
                </div>
            );
            break;

        case "chicken1":
            food = (
                <div className={classes.chicken1}>
                    <img
                        src="../../../../Assets/chicken1.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken2":
            food = (
                <div className={classes.chicken2}>
                    <img
                        src="../../../../Assets/chicken2.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken3":
            food = (
                <div className={classes.chicken3}>
                    <img
                        src="../../../../Assets/chicken3.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken4":
            food = (
                <div className={classes.chicken4}>
                    <img
                        src="../../../../Assets/chicken4.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken5":
            food = (
                <div className={classes.chicken5}>
                    <img
                        src="../../../../Assets/chicken5.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;

        case "carrot1":
            food = (
                <div className={classes.carrot1}>
                    <img
                        src="../../../../Assets/carrot1.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot2":
            food = (
                <div className={classes.carrot2}>
                    <img
                        src="../../../../Assets/carrot2.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot3":
            food = (
                <div className={classes.carrot3}>
                    <img
                        src="../../../../Assets/carrot3.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot4":
            food = (
                <div className={classes.carrot4}>
                    <img
                        src="../../../../Assets/carrot4.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot5":
            food = (
                <div className={classes.carrot5}>
                    <img
                        src="../../../../Assets/carrot5.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot6":
            food = (
                <div className={classes.carrot6}>
                    <img
                        src="../../../../Assets/carrot6.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot7":
            food = (
                <div className={classes.carrot7}>
                    <img
                        src="../../../../Assets/carrot7.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot8":
            food = (
                <div className={classes.carrot8}>
                    <img
                        src="../../../../Assets/carrot8.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot9":
            food = (
                <div className={classes.carrot9}>
                    <img
                        src="../../../../Assets/carrot9.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot10":
            food = (
                <div className={classes.carrot10}>
                    <img
                        src="../../../../Assets/carrot10.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot11":
            food = (
                <div className={classes.carrot11}>
                    <img
                        src="../../../../Assets/carrot11.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;

        default:
            food = null;
    }

    return food;
};

export default restaurantFoods;
