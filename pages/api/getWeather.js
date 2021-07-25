import axios from "axios";

export default async function handler(req, res) {
	const { location } = req.body;

	if (!location) {
		return res
			.status(400)
			.json({ status: 400, message: "Location is required" });
	}

	try {
		const weatherData = await axios.get(
			"https://api.openweathermap.org/data/2.5/weather",
			{
				params: {
					q: location,
					units: `metric`,
					appid: process.env.API_KEY,
				},
			}
		);

		const payload = {
			icon: weatherData.data.weather[0].icon,
			temp: Math.round(weatherData.data.main.temp).toString(),
			description: weatherData.data.weather[0].description,
			city: weatherData.data.name,
			country: weatherData.data.sys.country,
		};

		return res
			.status(200)
			.json({ status: 200, message: "successful", weather: payload });
	} catch (error) {
		return res
			.status(500)
			.json({ status: 500, error: error.response.data.message });
	}
}
