import React from "react";
//styles
import "./NavItem.css";

const NavItem = ({ id, name }) => {
  return (
    <li className="nav-item">
      <h3 className="nav-text"> {name}</h3>
    </li>
  );
};

export default NavItem;
