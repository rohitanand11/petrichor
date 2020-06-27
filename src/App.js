import React, { Component } from "react";
import Header from './components/Header/Header';
import './assets/icons/Icons';
import classes from "./App.module.css";
import Clouds from "./components/clouds/Clouds";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.container}></div>
        <Header/>
        <Clouds/>
      </React.Fragment>
    );
  }
}
export default App;
