import React, { Component } from 'react';
import { CardBackground } from "./background-display.js";
import "./temperature-card.css";
import { icons } from "./icons.js";
import { connect } from 'react-redux';
import Temperature from '../api/temperature-api.js';
import { fetchForecast } from '../api/forecast-api.js';
import { setForecastData, errorHandler, changeViewState } from '../actions.js';


const setColor = (degrees) => {
  // set icon color based on degrees
  // hot makes warmer red color
  // cold makes more blueish color

  // gaining intensity
  let warmScale = ["rgb(255, 255, 153)", "rgb(255, 204, 102)", "rgb(255, 153, 51)", "rgb(255, 51, 0)", "rgb(255, 0, 0)"];
  let coldScale = ["rgb(204, 255, 255)", "rgb(102, 204, 255)", "rgb(51, 153, 255)", "rgb(0, 102, 255)", "rgb(0, 0, 255)"];
}

const Icons = (props) => {
	const icon = props.icon.replace(/\s+/g, '-').toLowerCase() || "partly-sunny";
	const color = props.hotOrCold || "black"

	return <span><i style={{color}} className={`icon ion-md-${icon}`}></i></span>
}




function mapStateToProps(state) {
  return {
    tempData: state.current.current,
    location: state.current.location,
    viewState: state.viewState,
  }
}


// internal state of forecast modal (if its displayed or not)
class TemperatureCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      forecastPopout: false
    }

    this.toggleTempChange = this.toggleTempChange.bind(this);
    this.getForecast = this.getForecast.bind(this);
  }

  toggleTempChange() {
    console.log("clicked!")
  }


  getForecast() {
    if(this.props.viewState === "forecast") {
      this.props.dispatch(changeViewState("default"))
    }
    else {
      fetchForecast()
      .then(data => this.props.dispatch(setForecastData(data.forecast)))
      .then(data => this.props.dispatch(changeViewState("forecast")))
      .catch(err => this.props.dispatch(errorHandler(err)))
    }
  }

  render() {

    // TODO
    // if the viewstate is search set slight opacity to card

    let opacity = 1

    if(this.props.viewState === "search") {
      opacity = 0.7;
    }

      return(
          <CardBackground opacity={opacity}>
            <div className="forecast-toggle"  onClick={() => {this.getForecast(this.props.location.name)}}>FORECAST</div>
            <div>			
              <img src={this.props.tempData.condition.icon} />
              <h2>{this.props.location.name}</h2>
            </div>	
            <div>
              <Icons icon="thermometer" hotOrCold={"props.temp"}/>
              <button>{this.props.tempData.temp_c} C</button>
            </div>
          </CardBackground>
      );
  }
}

export default connect(mapStateToProps)(TemperatureCard)