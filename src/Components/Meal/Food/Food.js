import React from "react";
import classes from "./Food.module.css";
import PropTypes from "prop-types";

const restaurantFoods = (props) => {
    let food = null;
    restaurantFoods.propTypes = {
        type: PropTypes.string.isRequired
    };

    switch (props.type) {
        case "rice0":
            food = (
                <div className={classes.rice0}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/rice0_nhrfex.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "rice1":
            food = (
                <div className={classes.rice1}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/rice1_cgbv9r.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "rice2":
            food = (
                <div className={classes.rice2}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/rice333_f5eoh0.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;

        case "chicken0":
            food = (
                <div className={classes.chicken0}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030659/FoodApp/Ingredients/chicken0_qrtwzr.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken1":
            food = (
                <div className={classes.chicken1}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/chicken1_mk4h6b.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken2":
            food = (
                <div className={classes.chicken2}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030659/FoodApp/Ingredients/chicken2_jmeqsu.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken3":
            food = (
                <div className={classes.chicken3}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/chicken3_ksprg5.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "chicken4":
            food = (
                <div className={classes.chicken4}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030658/FoodApp/Ingredients/chicken4_ftkn9k.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;

        case "carrot0":
            food = (
                <div className={classes.carrot0}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030659/FoodApp/Ingredients/carrot0_xx3ecm.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;

        case "carrot1":
            food = (
                <div className={classes.carrot1}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/carrot1_hb97op.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot2":
            food = (
                <div className={classes.carrot2}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/carrot2_azf3fz.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot3":
            food = (
                <div className={classes.carrot3}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030658/FoodApp/Ingredients/carrot3_oqhoaa.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot4":
            food = (
                <div className={classes.carrot4}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030658/FoodApp/Ingredients/carrot4_c7mshn.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot5":
            food = (
                <div className={classes.carrot5}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030660/FoodApp/Ingredients/carrot5_rjmljs.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot6":
            food = (
                <div className={classes.carrot6}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030658/FoodApp/Ingredients/carrot6_j7nlsc.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot7":
            food = (
                <div className={classes.carrot7}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030659/FoodApp/Ingredients/carrot7_jy53j4.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot8":
            food = (
                <div className={classes.carrot8}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030659/FoodApp/Ingredients/carrot8_v1r3lz.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot9":
            food = (
                <div className={classes.carrot9}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030659/FoodApp/Ingredients/carrot9_bfzjfv.png"
                        alt="Foodvintage"
                    />
                </div>
            );
            break;
        case "carrot10":
            food = (
                <div className={classes.carrot10}>
                    <img
                        src="https://res.cloudinary.com/webmonc/image/upload/v1665030658/FoodApp/Ingredients/carrot10_z36zde.png"
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
