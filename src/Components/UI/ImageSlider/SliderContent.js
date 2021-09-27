import React from "react";
import SliderImage from "./SliderImage";

const sliderImage = (props) => {
    return (
        <section>
            {SliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={
                        index === props.activeSlide
                            ? "slides active fade"
                            : "inactive"
                    }
                >
                    <img className="slide-images" src={slide.src} alt="" />
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-text">{slide.description}</p>
                </div>
            ))}
        </section>
    );
};

export default sliderImage;
