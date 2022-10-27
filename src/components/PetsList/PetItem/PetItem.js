import React from "react";
//styles
import "./PetItem.css";
const PetItem = (props) => {
  return (
    <li className="pet-item">
      <img className="pet-image" src={props.images[0]} alt="pet" />
      <h4 className="pet-title">{props.title}</h4>
      <div className="pet-container">
        <div className="pet-container-content">
          <p className="pet-topic-text">gender:</p>{" "}
          <p className="pet-topic-text bold">{props.gender}</p>
        </div>
        <span>●</span>
        <div className="pet-container-content">
          <p className="pet-topic-text">age:</p>
          <p className="pet-topic-text bold">{props.gender}</p>
        </div>
      </div>
      <h2 className="price-text">{props.price} PLN</h2>
    </li>
  );
};

export default PetItem;
