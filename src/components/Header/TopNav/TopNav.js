import React from "react";
//components
import NavItem from "./NavItem/NavItem";
//styles
import "./TopNav.css";
const nav = [
  { id: "dummy_nav_id_1", name: "home" },
  { id: "dummy_nav_id_2", name: "category" },
  { id: "dummy_nav_id_3", name: "about" },
  { id: "dummy_nav_id_4", name: "contact" },
];

const TopNav = () => {
  return (
    <nav id="main-nav">
      <ul id="nav-list">
        {nav.map((navItem) => {
          return <NavItem key={navItem.id} {...navItem} />;
        })}
      </ul>
    </nav>
  );
};

export default TopNav;
