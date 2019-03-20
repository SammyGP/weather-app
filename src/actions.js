export function toggleTemp(tempType) {
  if(tempType === "CELCIUS") {
    return {
      type: "CHANGE_TEMP",
      tempType: "F"
    }
  }
  else if (tempType === "FARENHEIT") {
    return {
      type: "CHANGE_TEMP",
      tempType: "C"
    }
  }
}

export function setC(temperature) {
  return {
    type: "SET_C_TEMP",
    temperature: temperature
  }
}

export function setF(temperature) {
  return {
    type: "SET_F_TEMP",
    F: temperature
  }
}

export function handleViewState(viewState) {
  return {
    type: "CHANGE_VIEW",
    viewState
  }
}

export function fetchTemperatureDataSuccess(tempData) {
  return {
    type: "SET_TEMPERATURE_DATA",
    data: tempData,
    status: "success"
  }
}

export function fetchTemperatureDataFailure(error) {
  return {
    type: "SET_TEMPERATURE_DATA",
    status: error
  }
}

export function fetchForecastData(forecastData) {
  return {
    type: "SET_FORECAST_DATA",
    forecast: forecastData
  }
}

/***
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

 export const changeViewState = (newViewState) => {
   return {
     type: "CHANGE_VIEW_STATE",
     viewState: newViewState
   }
 }

 export const setCurrentData = (current) => {
   return {
     type: "SET_CURRENT_TEMPERATURE_DATA",
      current,
   }
 }

 export const setForecastData = (forecast) => {
   return {
     type: "SET_FORECAST_DATA",
     forecast,
   }
 }

 export function errorHandler(error) {
  return {
    type: "ERROR_HANLDER",
    error: error
  }
}

export const SET_TEMPERATURE_TO_C = "SET_TEMPERATURE_TO_C"

export const SET_TEMPERATURE_TO_F = "SET_TEMPERATURE_TO_F"
