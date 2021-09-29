import React from "react";
import classes from "./ButtonImg.module.css";
import { Link } from "react-router-dom";

const buttonImg = () => (
    <Link to="/join-us">
        <div className={classes.btnImg}>
            <img
                src="https://res.cloudinary.com/webmonc/image/upload/v1665029960/FoodApp/images/logo1_mr9qyt.png"
                alt="foodvintage"
            />
            <span className={classes.Txt}>Join us</span>
        </div>
    </Link>
);

export default buttonImg;
