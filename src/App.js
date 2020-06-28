import React, { Component } from "react";
import Header from './components/Header/Header';
import Clouds from "./components/clouds/Clouds";
import SearchBar from './components/search_bar/searchBar';

import './assets/icons/Icons';
import city_array from "./assets/data/citiesArray";
import classes from "./App.module.css";


class App extends Component {

  state = {
    textValue:'',
    suggestions:[...city_array],
  }

  handleTextValue = (event) => {
    const value_input = event.target.value;

    if(value_input.length()===0){
      this.setState({textValue:value_input,suggestions:[]});
    } else {
    const regex = new RegExp(`${value_input}`,'i');
    const suggest_list = this.state.suggestions.filter((el)=>el.test(regex));
    this.setState({textValue:value_input,suggestions:suggest_list});
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.container}></div>
        <Header/>
        <Clouds/>
        <SearchBar textValue={this.state.textValue} change={this.handleTextValue} suggestions={this.state.suggestions}/>
      </React.Fragment>
    );
  }
}
export default App;
