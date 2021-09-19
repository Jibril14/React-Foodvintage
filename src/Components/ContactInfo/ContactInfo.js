import React, { Component } from "react";
import classes from "./ContactInfo.module.css";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";
import axios from "axios";
import Error from "../UI/Error/Error";
import Success from "../UI/Success/Success";

class ContactInfo extends Component {
    state = {
        name: "",
        email: "",
        address: {
            state: "",
            postalCode: ""
        },
        loading: false,
        error: null,
        success: false
    };

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const order = {
            foods: this.props.foods,
            price: this.props.totalPrice,
            customerInfo: {
                name: "John Doe",
                email: "john@mail.com",
                address: {
                    street: "No !4 Lekki",
                    zipCode: "12549",
                    country: "Nigeria"
                }
            },
            deliveryMethod: "alx express"
        };

        axios
            .post("/orders.json", order)
            .then((response) => {
                console.log(response);
                this.setState({ loading: false });
                this.setState({ error: null });
                this.setState({ success: true });
                setTimeout(() => this.props.history.push("/"), 3000);
            })
            .catch((error) => {
                this.setState({ error: error.message });
                this.setState({ loading: false });
            });
    };
    render() {
        let form = (
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={classes.input}
                ></input>
                <input
                    className={classes.input}
                    type="text"
                    name="email"
                    placeholder="Email"
                ></input>
                <input
                    className={classes.input}
                    type="text"
                    name="state"
                    placeholder="State"
                ></input>
                <input
                    className={classes.input}
                    type="text"
                    name="postal"
                    placeholder="Postal Code"
                ></input>
                <Button clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactInfo}>
                <h4>Enter Your Contact Data</h4>
                {form}
                <Success showErr={this.state.success} />
                <Error showErr={this.state.error} error={this.state.error} />
            </div>
        );
    }
}

export default ContactInfo;
