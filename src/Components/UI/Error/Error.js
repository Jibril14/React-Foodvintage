import React from "react"
import classes from "./Error.module.css"

const error = (props) =>(
    <div className={classes.error}  style={{ display: props.showErr ? "block" : "none"}}>
      <h3>Hoops!</h3>
      <p>{props.error}.</p>
    </div>
)

export default error