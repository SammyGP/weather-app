import React, { Component } from 'react';

export const iconsOld = {
    cloudy: <i class="icon ion-md-cloudy"></i>,
    rain :<i class="icon ion-md-rainy"></i>,
    thunder: <i class="icon ion-md-thunderstorm"></i>,
    sunny: <i class="icon ion-md-sunny"></i>,
    partlySunny: <i class="icon ion-md-partly-sunny"></i>,

}

export const Icon = (props) => {
	const icon = props.icon.replace(/\s+/g, '-').toLowerCase() || "partly-sunny";
	const color = props.hotOrCold || "black"

	return <span><i style={{color}} className={`icon ion-md-${icon}`}></i></span>
}