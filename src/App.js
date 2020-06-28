import React, { Component } from "react";
import Header from "./components/Header/Header";
import Clouds from "./components/clouds/Clouds";
import SearchBar from "./components/search_bar/searchBar";
import Weather from "./components/weather/weatherContainer/Weather";

import "./assets/icons/Icons";
import weatherData from "./assets/data/weatherData";
import city_array from "./assets/data/citiesArray";
import classes from "./App.module.css";

class App extends Component {
  state = {
    textValue: "",
    suggestions: [],
    weatherData: null,
  };

  handleTextValue = (event) => {
    const value_input = event.target.value;

    if (value_input.length === 0) {
      this.setState({ textValue: value_input, suggestions: [] });
    } else {
      const regex = new RegExp(`${value_input}`, "i");
      const suggest_list = city_array.filter((el) => regex.test(el));
      const firstFourSuggestion = this.firstFourSuggestion(suggest_list);
      this.setState({
        textValue: value_input,
        suggestions: firstFourSuggestion,
      });
    }
  };

  firstFourSuggestion = (pFilteredSuggestions) => {
    const fourSuggestions = [];
    for (let i = 0; i < 4; i++) {
      fourSuggestions.push(pFilteredSuggestions[i]);
    }
    return fourSuggestions;
  };

  handleRenderWeather = () => {
    if(this.state.textValue!==''){
      console.log("handleRenderWeather called");
    }
  }

  checkToWeatherRender = () => {
    const dummy_data = {...weatherData};
    console.log(dummy_data);
    // if(this.state.weatherData===null){
    //   return null;
    // } else {
      return (<Weather pData={dummy_data}/>);
    // }
  }
  // handlesearchArrowClick = () => {
  //   this.setState({
  //     textValue: "",
  //     suggestions: [],
  //     searchArrowClick: true,
  //   });
  // };

  render() {
    return (
      // <React.Fragment>
        <div className={classes.container}>
        <Header />
        <Clouds />
        <SearchBar
          textValue={this.state.textValue}
          change={this.handleTextValue}
          suggestions={this.state.suggestions}
          renderWeather={this.handleRenderWeather}
        />
        {this.checkToWeatherRender()}
        </div>
      // </React.Fragment>
    );
  }
}
export default App;
