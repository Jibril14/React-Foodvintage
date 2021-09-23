import React, { Component } from "react";
import classes from "./ContactInfo.module.css";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";
import axios from "axios";
import Error from "../UI/Error/Error";
import Success from "../UI/Success/Success";

class ContactInfo extends Component {
    state = {
        loading: false,
        error: null,
        success: false,
        orders: [],

        customerInfo: {
            name: "",
            email: "",
            address: "",
            postal: "",
            deliveryMethod: ""
        }
    };

    formHandler = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let email = e.target.email;
        let address = e.target.address;
        let postal = e.target.postal;
        let deliveryMethod = e.target.delivery;

        this.setState({
            customerInfo: {
                ...this.state.customerInfo,
                [name]: e.target.value,
                [email]: e.target.value,
                [address]: e.target.value,
                [postal]: e.target.value,
                [deliveryMethod]: e.target.value
            }
        });
        console.log("CustomerInf", this.state.customerInfo);
    };

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const order = {
            foods: this.props.foods,
            price: this.props.totalPrice,
            customerInfo: this.state.customerInfo
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
            <form onChange={this.formHandler}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={classes.input}
                    required
                ></input>
                <input
                    className={classes.input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                ></input>
                <input
                    className={classes.input}
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                ></input>
                <input
                    className={classes.input}
                    type="text"
                    name="postal"
                    placeholder="Postal Code"
                    maxlength="6"
                    required
                ></input>

                <select
                    id="delivery"
                    name="Delivery method"
                    placeholder="Delivery method"
                    style={{ width: "100%" }}
                >
                    <option value="express">Express Delivery</option>
                    <option value="dhy">Dhl</option>
                </select>
                <Button clicked={this.orderHandler}>Order Now</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactInfo}>
                <h4 id="h4">Enter Your Contact Data</h4>
                {form}
                <Success showErr={this.state.success} />
                <Error showErr={this.state.error} error={this.state.error} />
            </div>
        );
    }
}

export default ContactInfo;
