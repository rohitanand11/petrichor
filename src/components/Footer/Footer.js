import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.brandName}>Badal Zaruri hai</h3>
      <ul className={classes.links}>
        <li><a href="https://github.com/rohitanand11/petrichor/">GitHub project repo</a></li>
        <li><a href="https://www.linkedin.com/in/rohitanand11/">Linkedin</a></li>
      </ul>
    </div>
  );
};

export default Footer;
