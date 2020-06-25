import React, { Component } from "react";
import Header from './Header/Header';

import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.container}></div>
        <Header/>
      </React.Fragment>
    );
  }
}
export default App;
