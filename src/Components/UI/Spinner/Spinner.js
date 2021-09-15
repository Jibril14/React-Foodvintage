import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => <div className={classes.spinnerContainer}>
                          <div className={classes.ldsHourglass}></div>
                          
                     </div>;

export default spinner;
