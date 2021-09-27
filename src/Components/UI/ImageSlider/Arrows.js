import React from "react";

const arrow = (props) => (
    <div className="arrows">
        <span className="prev" onClick={props.prevSlide}>
            <i class="fas fa-arrow-left"></i>
        </span>
        <span className="next" onClick={props.nextSlide}>
            <i class="fas fa-arrow-right"></i>
        </span>
    </div>
);

export default arrow;
