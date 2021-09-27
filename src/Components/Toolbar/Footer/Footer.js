import React from "react";
import classes from "./Footer.module.css";

const footer = () => (
    <footer className={classes.footer}>
        <p>
            Powered by
            <a
                href="https://www.linkedin.com/mwlite/in/Abdullahi-abdulwasiu-1aaa3311b"
                target="_blank"
                rel="noreferrer"
                title="ABC"
                className={classes.footer.text}
            >
                ABC
            </a>
        </p>
    </footer>
);

export default footer;
