import { useState } from "react";
import axios from "axios";
import Image from "next/image";

function Home() {
	const [location, setLocation] = useState("");
	const [weather, setWeather] = useState({
		icon: "",
		temp: "",
		description: "",
		city: "",
		country: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/api/getWeather", {
				location,
			})
			.then((res) => {
				setWeather({ ...weather, ...res.data.weather });
			})
			.catch((err) => {
				setWeather({
					...weather,
					icon: "unknown",
					temp: "",
					description: "",
					city: "",
					country: "",
				});
			});
	};

	const onChange = (e) => {
		setLocation(e.target.value);
	};
	return (
		<div>
			<div className="container">
				<p className="title">Weather</p>
				<form onSubmit={onSubmit} method="POST" action="/api/getWeather">
					<input
						type="text"
						id="input-value"
						placeholder="Enter city name"
						value={location}
						onChange={onChange}
					/>
					<input type="submit" className="submit" value="Search" />
				</form>
				<div className="results">
					{weather.icon && (
						<div className="icon">
							<Image
								src={`/weathericons/${weather.icon}.svg`}
								width={128}
								height={128}
							/>
						</div>
					)}

					{weather.temp && <p className="temp">{weather.temp}&deg;C</p>}

					{weather.description && <p className="desc">{weather.description}</p>}

					{weather.city && (
						<p className="city">
							{weather.city}, {weather.country}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
