import React from "react";
import classes from "./Grid.module.css";
import LeftColumn from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";
import Category from "../UI/Category/Category";
import Profile from "../UI/Profile/Profile";
import Restaurant from "../../Containers/Restaurant/Restaurant";
import Dinner from "../UI/Dinner/Dinner";
import Lunch from "../UI/Lunch/Lunch";
import Slider from "../UI/ImageSlider/Slider";
import { Route } from "react-router-dom";

const grid = (props) => {
    console.log("props.match.path ", props.match.path);
    return (
        <div className={classes.pageContent}>
            <div className={classes.grid}>
                <LeftColumn>
                    <Profile />
                    <Category />
                </LeftColumn>
                <RightColumn>
                    <Slider />
                    <Route path="/" exact component={Restaurant} />
                    <Route
                        path={props.match.path + "lunch"}
                        component={Lunch}
                    />
                    <Route
                        path={props.match.path + "dinner"}
                        component={Dinner}
                    />
                </RightColumn>
            </div>
        </div>
    );
};

export default grid;
