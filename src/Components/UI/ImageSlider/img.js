import React, { useState } from "react";
import SliderImage from "./SliderImage";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrow from "./Arrows";
import "./Slider.css";

const len = SliderImage.length - 1;

console.log("lenslider", SliderImage.length);
console.log("lens", len);
function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log("activeind", activeIndex);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} />
            <Arrow
                prevSlide={() => (activeIndex === 0 ? len : activeIndex - 1)}
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />

            <Dots
                activeIndex={4}
                clicked={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Slider;
