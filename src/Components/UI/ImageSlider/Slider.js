import React, { Component } from "react";
import SliderImage from "./SliderImage";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrow from "./Arrows";
import "./Slider.css";

let len = SliderImage.length - 1;

class Slider extends Component {
    state = {
        activeSlide: 0
    };

    updateActiveSlide = () => {
        len++;

        if (len >= SliderImage.length) {
            len = 0;
        }
        this.setState({ activeSlide: len });
    };
    componentDidMount() {
        this.setState(() => setInterval(this.updateActiveSlide, 5000));
        console.log("Mounting...");
    }
    render() {
        return (
            <div className="slider-container">
                <SliderContent activeSlide={this.state.activeSlide} />
                <Arrow
                    prevSlide={() =>
                        this.state.activeSlide >= 1
                            ? this.setState({
                                  activeSlide: this.state.activeSlide - 1
                              })
                            : this.setState({
                                  activeSlide: len
                              })
                    }
                    nextSlide={() =>
                        this.state.activeSlide <= len - 1
                            ? this.setState({
                                  activeSlide: this.state.activeSlide + 1
                              })
                            : this.setState({
                                  activeSlide: 0
                              })
                    }
                />

                <Dots
                    activeSlide={this.state.activeSlide}
                    clicked={(active) => this.setState({ activeSlide: active })}
                />
            </div>
        );
    }
}

export default Slider;
