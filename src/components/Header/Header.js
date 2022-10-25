import React from "react";
//components
import TopNav from "./TopNav/TopNav";
import SearchBar from "../ui-elements/SearchBar/SearchBar";
import Button from "../ui-elements/Button/Button";
//images
import logo from "../../assets/logo/logo-monito.png";
//styles
import "./Header.css";
const Header = () => {
  return (
    <header id="main-header">
      <img className="logo-monito" src={logo} alt="Monito" />
      <TopNav />
      <div className="header-container">
        <SearchBar />
        <Button darkBlue>Login</Button>
      </div>
    </header>
  );
};

export default Header;
