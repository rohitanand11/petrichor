import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Clouds.module.css";

const Clouds = () => {
  return (
    <div className={classes.cloud}>
      <div className={classes.cloud1}>
        <FontAwesomeIcon icon="cloud"  color="black" size="7x"/>
      </div>
      <div className={classes.cloud2}>
        <FontAwesomeIcon icon="cloud"  color="white" size="10x"/>
      </div>
      <div className={classes.cloud3}>
        <FontAwesomeIcon icon="cloud"  color="gray" size="2x"/>
      </div>
    </div>
  );
};

export default Clouds;
