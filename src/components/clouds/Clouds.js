import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from "./Clouds.module.css"

const Clouds = () => {
    return(
        <div>
            <FontAwesomeIcon icon="cloud" size="10x" className={classes.cloud1}/>
        </div>

        
    );
}

export default Clouds;