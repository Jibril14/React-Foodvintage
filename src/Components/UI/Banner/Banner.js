import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import classes from "./Banner.module.css";

const banner = () => (
    <div className={classes.banner}>
        <div className={classes.bannerImg}>
            <img
                src="https://res.cloudinary.com/webmonc/image/upload/v1665090059/FoodApp/Slides/chef_ddlvbw.jpg"
                alt="foodvintage"
            />
        </div>

        <div className={classes.bannerRight}>
            <Testimonial />
        </div>
    </div>
);

export default banner;
