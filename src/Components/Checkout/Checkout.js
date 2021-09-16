import React, { Component } from "react";
import Meal from "../Meal/Meal";
import Button from "../UI/Button/Button";
import { Route } from "react-router-dom";
import ContactInfo from "../ContactInfo/ContactInfo";

class Checkout extends Component {
    state = {
        foods: null,
        totalPrice: 0
    };

    componentWillMount() {
        const foodQuery = new URLSearchParams(this.props.location.search);
        const foods = {};
        let price = 0;
        for (let param of foodQuery.entries()) {
            if (param[0] === "price") {
                price = param[1];
            } else {
                foods[param[0]] = +param[1];
            }
        }
        this.setState({ foods: foods, totalPrice: price });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };
    render() {
        return (
            <div>
                <h1>Do have a wonderful meal!</h1>
                <div
                    style={{
                        width: "300px",
                        margin: "auto",
                        backgroundColor: "red",

                        position: "relative"
                    }}
                >
                    <Meal foodMenu={this.state.foods} />
                </div>
                <Button
                    btnType="Danger"
                    clicked={this.checkoutCancelledHandler}
                >
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.checkoutContinuedHandler}
                >
                    CONTINUE
                </Button>

                <Route
                    path={this.props.match.path + "/contact-data"}
                    render={(props) => (
                        <ContactInfo
                            foods={this.state.foods}
                            totalPrice={this.state.totalPrice}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

export default Checkout;
