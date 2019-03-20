import React, { Component } from 'react';
import "./search-bar.css"
import { fetchTemp } from '../api/temperature-api';
import { fetchTemperatureDataSuccess, errorHandler, changeViewState, setCurrentData } from '../actions';
import { connect } from 'react-redux';

// internal state of formdata and input values (before being submitted to the store)
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      visibility:"icon"
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value})
    if(event.target.focus) {
      console.log("focused")
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    fetchTemp(this.state.value)
      .then((result) => this.props.dispatch(setCurrentData(result)))
      .then(data => {
        this.setState({visibility: "icon"})
        this.props.dispatch(changeViewState("default"))
      })
      .catch((err) => this.props.dispatch(errorHandler(err)))
  }

  handleVisibility() {
    if(this.state.visibility === "icon") {
      this.setState({visibility: "search-bar"})
      this.props.dispatch(changeViewState("search"))
      // to do, dispatch action to blur tempcard while user is searching
    }
  }

  render() {

    // TODO
    // set viewstate on input click instead, that way the temp card will gain opacity while search is clicked
    if(this.state.visibility === "search-bar") {
      return(
        <form className="search-form" onSubmit={this.handleSubmit} >
          <input type="text" name="search" value={this.state.value} onChange={this.handleInputChange} />
          <button><i className="icon ion-md-search"></i></button>
        </form>
      );
    }
    else if (this.state.visibility === "icon") {
      return(
        <div className={"search-icon"}>
          <button onClick={this.handleVisibility} ><i className="icon ion-md-search search-button"></i></button>
        </div>
      );
    }
  }
}

export default connect()(SearchBar)