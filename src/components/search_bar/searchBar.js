import React from "react";
import classes from "./searchBar.module.css";

const SearchBar = (props) => {

    console.log(props.suggestions);
    const renderUnOrderList = () => {
        if (props.suggestions.length===0){
            return null;
        } else {
            return(<ul>{renderList()}</ul>);
        }
    }
    const renderList = () => {
            const list_arr=props.suggestions.map((el,index)=><li key={index}>{el}</li>);
            return list_arr;
    }
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
      {/* searchicon */}
    </div>
  );
};

export default SearchBar;
