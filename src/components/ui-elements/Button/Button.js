import React from "react";
//styles
import "./Button.css";
const Button = (props) => {
  return (
    <button
      className={`main-button 
      ${props.darkBlue && "dark-button"}
      ${props.blue && "blue-button"}
      ${props.transparent && "transparent-button"}
      ${props.blocked && "blocked-button"}
      `}
      onClick={props.onClick}
      type={`button` || props.type}
      blocked={props.blocked}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
