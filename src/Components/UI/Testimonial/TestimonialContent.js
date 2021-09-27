import React from "react";
import AllTestimonials from "./AllTestimonials";

const testimonialContent = (props) => {
    console.log("AAlarray", AllTestimonials);
    return (
        <div>
            {AllTestimonials.map((vals, index) => (
                <div
                    key={index}
                    className={
                        index === props.activeIndex ? "active" : "inactive"
                    }
                >
                    <p className="text">{vals.text}</p>
                    <div className="user">
                        <img className="user-image" src={vals.src} alt="" />
                        <div className="user-details">
                            <h4 className="username">{vals.name}</h4>
                            <p className="location">
                                Location: {vals.location}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default testimonialContent;
