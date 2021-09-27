import React from "react";
import classes from "./Lunch.module.css";

const lunch = () => (
    <div className={classes.lunch}>
        <h3>Lunch Upcoming!</h3>
        <h4>What to expect on the menu</h4>
        <ul>
            <li>French Toast</li>
            <li>Biscuits and Gravy</li>
            <li>Chiken with shrimp stew</li>
            <li>Drunken Noddles</li>
            <li>Baked Spaezle with Green pesto</li>
            <li>Risotto Cheese</li>
            <li>Fried Potatos</li>
            <li>Sea Food</li>
            <li>Caramel Fresh Juice</li>
            <li>Coconut Rice</li>
            <li>Scrambled eggs</li>
            <li>Blueberry Pancake </li>
            <li>Egg Burrito</li>
        </ul>
        <div className={classes.foodMenu}>
            <div
                className={classes.column}
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/webmonc/image/upload/v1665091007/FoodApp/Slides/di2_y6avsv.jpg')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "0.4s"
                }}
            >
                <p>Chop Chop fine</p>
            </div>
            <div
                className={classes.column}
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/webmonc/image/upload/v1665031860/FoodApp/images/dd_ac4uww.jpg')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "0.4s"
                }}
            >
                <p>Discover the true meaning of pleasure</p>
            </div>
        </div>
    </div>
);

export default lunch;
