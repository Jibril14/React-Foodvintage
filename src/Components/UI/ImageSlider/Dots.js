import React from "react";
import SliderImage from "./SliderImage";

const sliderImage = (props) => (
    <div className="all-dots">
        {SliderImage.map((slide, index) => (
            <span
                key={index}
                className={`${
                    props.activeSlide === index ? "dot active-dot" : "dot"
                }`}
                onClick={(event) => props.clicked((event.target.value = index))}
            ></span>
        ))}
    </div>
);
export default sliderImage;
