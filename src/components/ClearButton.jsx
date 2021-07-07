import React from "react";
import "./Button.css";

export const ClearButton = (props) => (
  <div className="clear-btn button" onClick={props.handleClear}>
    {props.children}
  </div>
);