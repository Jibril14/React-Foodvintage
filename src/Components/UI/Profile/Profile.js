import React from "react";
import "./Profile.css";

const profile = () => (
    <div className="my-profile">
        <img
            className="profile-image"
            src="https://res.cloudinary.com/webmonc/image/upload/v1658886619/My%20Profile/me_sufv3k.png"
            alt="foodvintage"
        />
        <div className="user-info">
            <h4>Abdullahi Abdulwasiu</h4>

            <a
                href="https://www.linkedin.com/mwlite/in/Abdullahi-abdulwasiu-1aaa3311b"
                target="_blank"
                rel="noreferrer"
            >
                <p>Linkdln</p>
            </a>
        </div>
    </div>
);

export default profile;
