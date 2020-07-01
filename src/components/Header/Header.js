import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.brandName}>Petrichor</h3>
      <ul className={classes.links}>
        <li>Mitti Di Khushboo</li>
        
      </ul>
    </div>
  );
};

export default Header;
