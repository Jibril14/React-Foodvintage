import React, { Component } from "react";
import Auxi from "../../Hoc/Auxi";
import Meal from "../../Components/Meal/Meal";
import FoodControl from "../../Components/Meal/FoodControl/FoodControl";

const FOOD_PRICES = {
    rice: 0.5,
    chicken: 0.4,
    carrot: 0.1
};

class Restaurant extends Component {
    state = {
        foods: {
            rice: 0,
            chicken: 0,
            carrot: 0
        },
        totalPrice: 3
    };

    addFoodHandler = (type) => {
        const oldCount = this.state.foods[type];
        const updatedCount = oldCount + 1;
        const updatedFood = {
            ...this.state.foods
        };
        updatedFood[type] = updatedCount;
        const priceAddition = FOOD_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, foods: updatedFood });
    };

    removeFoodHandler = (type) => {
        const oldCount = this.state.foods[type];
        const updatedCount = oldCount - 1;
        const updatedFood = {
            ...this.state.foods
        };
        updatedFood[type] = updatedCount;
        const priceAddition = FOOD_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ totalPrice: newPrice, foods: updatedFood });
    };

    render() {
        const disabledLessBtn = {
            ...this.state.foods
        };

        for (let key in disabledLessBtn) {
            disabledLessBtn[key] = disabledLessBtn[key] <= 0;
        }

        const disabledMoreBtn = {
            ...this.state.foods
        };

        for (let key in disabledMoreBtn) {
            if (key === "rice") {
                disabledMoreBtn["rice"] = disabledMoreBtn["rice"] >= 3;
            } else if (key === "chicken") {
                disabledMoreBtn["chicken"] = disabledMoreBtn["chicken"] >= 5;
            } else {
                disabledMoreBtn["carrot"] = disabledMoreBtn["carrot"] >= 10;
            }
            //console.log("disabledMoreBtn", disabledMoreBtn);
        }
        console.log("disabledMoreBtn", disabledMoreBtn);
        return (
            <Auxi>
                <Meal foodMenu={this.state.foods} show={red} />
                <FoodControl
                    foodAdded={this.addFoodHandler}
                    foodRemoved={this.removeFoodHandler}
                    disableLess={disabledLessBtn}
                    disableMore={disabledMoreBtn}
                    price={this.state.totalPrice}
                />
            </Auxi>
        );
    }
}

export default Restaurant;
