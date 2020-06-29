import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./searchBar.module.css";

const SearchBar = (props) => {

  const renderUnOrderList = () => {
    if (props.suggestions.length === 0) {
      return null;
    } else {
      return <ul className={classes.listContainer}>{renderList()}</ul>;
    }
  };

  const renderList = () => {
    const list_arr = props.suggestions.map((el, index) => (
      <li key={index}>{el}</li>
    ));
    return list_arr;
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputAndSuggestions}>
        <input
          type="text"
          value={props.textValue}
          onChange={props.change}
          className={classes.inputClass}
        />
        {renderUnOrderList()}
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
