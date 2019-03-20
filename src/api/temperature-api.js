
const fetchTemp = async (location = "auto:ip") =>{
	const key = process.env.REACT_APP_WEATHER_KEY;
	try {
		let result  = await fetch(`http://api.apixu.com/v1/current.json?key=${key}&q=${location}"`)

		let data = await result.json();

		if(data.error) {
			throw new Error("ERROR MESSAGE: " + data.error.message)
		}
		return data;
	} catch(error) {
		return Promise.reject(error)
	}
}

const fetchTempMock = async(location = "auto:ip", error) => {

	// if second argument return the error response instead
	if(error) {
		return "error flag";
	}
	const data = {
		current: {
			temp_c: 27,
			temp_f: 99,
			condition: {text: "Sunny"}
		},
		location: "Home CITY PLACE"
	}

}
export { fetchTemp };