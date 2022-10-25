import React from "react";
//icon
import { BsSearch } from "react-icons/bs";
//styles
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search">
        <BsSearch className="icon" />
      </label>
      <input
        id="search"
        placeholder="Search something here!"
        type="text"
        min={3}
      />
    </div>
  );
};

export default SearchBar;
