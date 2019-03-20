
/*
export default class Temperature {
	constructor() {
		this.key = process.env.REACT_APP_WEATHER_KEY;
		this.baseUrl = "http://api.apixu.com/v1";
		this.routes = {
			current: 	this.baseUrl + "/current.json",
			forecast: this.baseUrl + "/forecast.json",
			search: this.baseUrl + "/search.json",
		}
	}

	async request(location = "auto:ip") {
		if (navigator) {
			console.log(navigator)
		}
		let result  = await fetch(`http://api.apixu.com/v1/current.json?key=${this.key}&q=${location}"`)
		let data = await result.json();
		return data;
	}

}*/
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