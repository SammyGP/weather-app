import Temperature from "./api/temperature-api";

// store object
export const initialState = {
  viewState: "HOME",
  tempType: "CELSIUS",
  condition: null,
  temperature: {
    C: null,
    F: null
  },
  status: null,
  location: null,
  error: null,
  forecast: []
}

export const initStore = {
  viewState: "loading",
  tempType: "celsius",
  current: null,
  forecast: null,
  error: null,
}