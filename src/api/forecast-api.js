
const fetchForecast = async(location = "auto:ip") => {
  const key = process.env.REACT_APP_WEATHER_KEY;
  try {
    let result = await fetch(`http://api.apixu.com/v1/forecast.json?key=${key}&days=5&q=${location}"`);

    let data = await result.json();

		if(data.error) {
			throw new Error("ERROR MESSAGE: " + data.error.message)
		}
    return data;
  }
  catch(error) {
    throw Error(error)
  }
}

export { fetchForecast }