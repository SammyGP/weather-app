import React, { Component } from 'react';
import {connect} from "react-redux"
import { Icon } from './icons';
import "./forecast.css"


const mapStateToProps = (state) => {
  return { 
    forecast: state.forecast.forecastday
  }
}

const ForecastCell = (props) => {
  return(
    <li style={{outline:"1px solid black"}} >
      <Icon icon={props.cell.day.condition.text} />
      <p>max: {props.cell.day.maxtemp_c} C</p>
      <p>min: {props.cell.day.mintemp_c} C</p>
    </li>
  );
} 

class Forecast extends Component {
  render() {
    let list = [];
    this.props.forecast.map((cell) => {
      list.push(
        <ForecastCell cell={cell} key={cell.date} />
      );
    })
    return(
      <ul className="forecast-list">
        { list }
      </ul>
    );
  }
}

export default connect(mapStateToProps)(Forecast)