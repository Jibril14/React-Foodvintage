import React, { Component } from "react";
import TestimonialContent from "./TestimonialContent";
import AllTestimonials from "./AllTestimonials";
import "./Testimonial.css";
import ProgressBar from "./ProgressBar";
import Quote from "./Quote";

let add = 0;

class Testimonial extends Component {
    state = {
        activeIndex: 1,
        interval: null
    };
    updateActiveIndex = () => {
        add++;
        this.setState({ activeIndex: add });
        if (add >= AllTestimonials.length - 1) {
            add = 0;
        }
    };
    componentDidMount() {
        this.setState({ interval: setInterval(this.updateActiveIndex, 10000) });
        console.log("Mounting...");
    }
    componentWillUnmount() {
        this.setState(() => {
            clearInterval(this.state.interval);
        });
    }

    render() {
        return (
            <div className="testimonial-container">
                <ProgressBar />
                <Quote />
                <TestimonialContent activeIndex={this.state.activeIndex} />
            </div>
        );
    }
}

export default Testimonial;
