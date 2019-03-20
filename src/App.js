import React, { Component } from 'react';
import SearchBar from './Components/search-bar';
import TemperatureCard from "./Components/temperature-card";
import Forecast from "./Components/forecast";
import './App.css';
import { connect } from "react-redux";
import { setCurrentData, errorHandler, changeViewState } from './actions.js';
import { fetchTemp, fetchTempMock } from './api/temperature-api';


//const weather_key = process.env.REACT_APP_WEATHER_KEY;


const mapStateToProps = (state) => {
  return {
    viewState: state.viewState,
    tempType: state.tempType,
    current: state.current,
    forecast: state.forecast,
    error: state.error,
  }
}

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    
    fetchTemp()
    .then(data => this.props.dispatch(setCurrentData(data)))
    .then(result => this.props.dispatch(changeViewState("default")))
    .catch((err) => this.props.dispatch(errorHandler(err)))
  }

  componentDidUpdate() {

  }

  render() {
    const viewState = this.props.viewState;

    if(viewState === "default" || viewState === "search") {
      return(
        <div className="App">
        <SearchBar />
        <TemperatureCard />
        <footer>
          <p>Powered by <a href="https://www.apixu.com/" title="Weather API">Apixu.com</a></p>
        </footer>
    </div>
      );
    }

    if(viewState === "forecast") {
      return(
        <div className="App">
            <SearchBar />
            <TemperatureCard />
            <Forecast />
            <footer>
              <p>Powered by <a href="https://www.apixu.com/" title="Weather API">Apixu.com</a></p>
            </footer>
        </div>
      );
    }

    return(
      <div className="App">
          <SearchBar />
          <footer>
            <p>Powered by <a href="https://www.apixu.com/" title="Weather API">Apixu.com</a></p>
          </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
