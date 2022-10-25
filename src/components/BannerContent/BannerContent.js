import React from "react";

//components
import Content from "./Content/Content";
//styles
import "./BannerContent.css";
const BannerContent = () => {
  return (
    <div className="banner-content">
      <Content />
      <img
        className="banner-img"
        src="./images/banner-image.png"
        alt="Banner"
      />
    </div>
  );
};

export default BannerContent;
