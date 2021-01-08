import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./searchBar.module.css";

const SearchBar = (props) => {

  return (
    <div className={classes.container}>
      <div className={classes.inputAndSuggestions}>
        <input
          type="text"
          placeholder="Enter city name"
          value={props.textValue}
          onChange={props.change}
          className={classes.inputClass}
        />
      </div>

      <div className={classes.arrowContainer}>
        <div className={classes.arrowIcon} onClick={props.renderWeather}>
          <FontAwesomeIcon icon="arrow-right" color="black" size="3x" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
