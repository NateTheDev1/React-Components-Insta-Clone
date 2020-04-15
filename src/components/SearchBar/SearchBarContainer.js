// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="insta-logo">
        <i className="fab fa-instagram" />
        {/* <h1>Instagram</h1> */}
        <img src="https://www.dafont.com/forum/attach/orig/7/3/737566.png?1"></img>
      </div>

      <form className="search-form">
        <input
          type="text"
          placeholder="🔎 Search"
          onChange={(e) => props.setFilter(e.target.value)}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
