import React, { Component } from "react";
import Header from "./components/Header/Header";
import Clouds from "./components/clouds/Clouds";
import SearchBar from "./components/search_bar/searchBar";
import Weather from "./components/weather/weatherContainer/Weather";
import Footer from "./components/Footer/Footer";

import "./assets/icons/Icons";
//import weatherData from "./assets/data/weatherData";
import classes from "./App.module.css";

class App extends Component {
  state = {
    textValue: "",
    weatherData: null,
    showWeather: false,
  };

  handleTextValue = (event) => {
    const value_input = event.target.value;
    this.setState({ textValue: value_input });
  }

  handleRenderWeather = () => {
    console.log("handleRenderWeather called");
    if (this.state.textValue !== "") {
      const city_name = this.state.textValue;
      const search_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=2f1da16080e01aef4a330af3b2409d51`;
      console.log(search_url);
      fetch(search_url)
        .then((response) => response.json())
        .then((res) =>
          this.setState({ textValue: "", suggestions: [], weatherData: res })
        );
      console.log(this.state.weatherData);
    }
  };

  checkToWeatherRender = () => {
    if (this.state.weatherData === null) {
      return null;
    } else {
      return <Weather pData={this.state.weatherData} />;
    }
  };

  render() {
    return (
      // <React.Fragment>
      <div className={classes.container}>
        <Header />
        <Clouds />
        <SearchBar
          textValue={this.state.textValue}
          change={this.handleTextValue}
          renderWeather={this.handleRenderWeather}
        />

        {this.state.weatherData && this.checkToWeatherRender()}
        <Footer/>
      </div>
      // </React.Fragment>
    );
  }
}
export default App;
