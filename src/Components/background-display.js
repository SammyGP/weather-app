import React, { Component } from 'react';
import "./background-display.css";


/*
export const CardBackground = (props) => {
  const dimensionX = 800;
  const dimensionY = 600;
  const query = props.weather || "paradise";
  const url = `https://source.unsplash.com/random/${dimensionX}x${dimensionY}/?${query}`;


  
  let img = new Image();
  let test = null
  img.src = url;
  img.onload = () => {
    test = "img.src"
    console.log("laoded")
  }
  let backgroundStyle = {
    backgroundImage:`url(${test})`,
    //opacity: props.opacity || 1,
  }

  return(
  <div className="wrapper-div" style={{backgroundImage:`url(${test})`}}>
    {props.children}
  </div>
  );
}
*/



export class CardBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "/AAA",
      img: null,
    }
  }

  componentDidMount() {
    const dimensionX = 800;
    const dimensionY = 600;
    const query = this.props.weather || "paradise";
    const url = `https://source.unsplash.com/random/${dimensionX}x${dimensionY}/?${query}`;


    const imgLoader = new Image();
    imgLoader.src = url;
    imgLoader.onload = () => {
      this.setState(() => ({
        img: imgLoader.src
      }));
    }


  }

  render() {
    const img = this.state.img
    if(!img) {
      return <h1>loading</h1>;
    } 
    return(
      <div className="wrapper-div" style={{backgroundImage:`url(${img})`, opacity: this.props.opacity}}>
        {this.props.children}
      </div>
    );
  }
}
