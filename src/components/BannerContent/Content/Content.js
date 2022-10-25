import React from "react";
//components
import Button from "../../ui-elements/Button/Button";
//icon
import { IoPlayCircleOutline } from "react-icons/io5";
//styles
import "./Content.css";
const Content = () => {
  return (
    <div className="content">
      <div>
        <h1 className="header header-50">one more friend</h1>
        <h2 className="header header-40" style={{ marginBottom: "5%" }}>
          thousands more fun!
        </h2>
        <p
          className="grap-text"
          style={{ marginBottom: "2rem", padding: "0 22%" }}
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
      </div>
      <div className="buttons-container">
        <Button transparent>
          view intro <IoPlayCircleOutline className="icon" />
        </Button>
        <Button darkBlue>explore now</Button>
      </div>
    </div>
  );
};

export default Content;
