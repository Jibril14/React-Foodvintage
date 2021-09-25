import React, { Component } from "react";
import classes from "./Joinus.module.css";
import Spinner from "../UI/Spinner/Spinner";
import axios from "axios";

class Joinus extends Component {
    state = {
        joinus: {
            name: "",
            email: "",
            message: ""
        },
        success: false,
        loading: false
    };

    joinUsHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const join = this.state.joinus;
        axios
            .post("/join-us.json", join)
            .then((response) => {
                this.setState({ success: true, loading: false });
            })
            .catch((error) => {
                alert(error);
            });
    };

    formHandler = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let email = e.target.email;
        let message = e.target.message;
        this.setState({
            joinus: {
                ...this.state.joinus,
                [name]: e.target.value,
                [email]: e.target.value,
                [message]: e.target.value
            }
        });
    };

    render() {
        let form = (
            <form onChange={this.formHandler}>
                <label for="name">
                    <b>Your Name</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    required
                />

                <label for="email">
                    <b>Email</b>
                </label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                />
                <label for="subject">
                    <b>Subject</b>
                </label>
                <textarea
                    id="subject"
                    name="message"
                    placeholder="Write something.."
                    style={{ height: "200px", width: "100%" }}
                    required
                ></textarea>
                <button
                    className={classes.joinBtn}
                    type="button"
                    onClick={this.joinUsHandler}
                >
                    Send
                </button>
            </form>
        );
        if (this.state.success) {
            form = (
                <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                        Your message was received. Thank you for your interest!
                    </p>
                    <Spinner />
                </div>
            );
        }
        let spinner;
        if (this.state.loading) {
            spinner = <Spinner />;
        }
        return (
            <div className={classes.container}>
                <h4 style={{ color: "#000", margin: "10px 0" }}>
                    We connect food lovers with food businesses
                </h4>
                {spinner}
                {form}
            </div>
        );
    }
}

export default Joinus;
