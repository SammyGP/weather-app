import { initialState, initStore } from "./store";


export const weatherAppOld = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_VIEW":
      return Object.assign({}, state, {
        viewState: action.viewState
      })
    case "SET_C_TEMP":
      return Object.assign({}, state, {
        temperature: {C: action.temperature}
      })
    case "SET_TEMPERATURE_DATA":
      return Object.assign({}, state, {
        temperature: {
          C: action.data.current.temp_c,
          F: action.data.current.temp_f
        },
        condition: action.data.current.condition.text,
        location: action.data.location.name
      })
    case "HANDLE_ERROR": 
      return Object.assign({}, state, {
        error: action.error
      })

    case "SET_FORECAST_DATA":
      return Object.assign({}, state, {
        forecast: action.forecast
      })
    default:
      return state;
  }
  return state;
}

export const weatherApp = (state=initStore, action) => {
  switch(action.type) {
    
    case "CHANGE_VIEW_STATE":
      return Object.assign({}, state, {
        viewState: action.viewState
      })

    case "SET_CURRENT_TEMPERATURE_DATA":
      return Object.assign({}, state, {
          current: action.current
      })

    case "SET_FORECAST_DATA":
      return Object.assign({}, state, {
          forecast: action.forecast
      })

    case "ERROR_HANDLER":
      return Object.assign({}, state, {
          error: action.error
      })

    default:
      return state;
  }
}