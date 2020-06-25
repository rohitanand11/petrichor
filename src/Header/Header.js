import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.brandName}>Petrichor</h3>
      <ul className={classes.links}>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
        <li>link4</li>
        <li>link5</li>
      </ul>
    </div>
  );
};

export default Header;
