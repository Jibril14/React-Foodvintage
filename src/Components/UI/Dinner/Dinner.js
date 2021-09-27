import React from "react";
import classes from "./Dinner.module.css";

const dinner = () => (
    <div className={classes.dinner}>
        <h3>Dinner Upcoming!</h3>
        <h4>What to expect on the menu</h4>
        <ul>
            <li>Spaghetti Salad</li>
            <li>Beans with Hollandaise sauce</li>
            <li>Pepperoni Meat</li>
            <li>Pounded Yam and Egusi Soup</li>
            <li>Scrambled eggs</li>
            <li>Spicy Thai Chiken Dinner</li>
            <li>La Pa' Granola Lafaya'tte</li>
            <li>Pasta with Asparagus</li>
            <li>Veggie Gravy</li>
            <li>Bolognese Sauce</li>
            <li>Gelato</li>
        </ul>
        <div className={classes.foodMenu}>
            <div
                className={classes.column}
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/webmonc/image/upload/v1665031806/FoodApp/images/4d_kbz6w0.jpg')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "0.4s"
                }}
            >
                <p>Healthy Food up to 50% off</p>
            </div>
            <div
                className={classes.column}
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/webmonc/image/upload/v1665090311/FoodApp/Slides/l20rsli_nc586f.jpg')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "0.4s"
                }}
            >
                <p>Super Delicious Marshed Potato and Bolognese Sauce</p>
            </div>
        </div>
    </div>
);

export default dinner;
