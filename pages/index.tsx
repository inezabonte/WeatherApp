import { useState, FormEvent } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
	const [location, setLocation] = useState("");
	const [weather, setWeather] = useState({
		icon: "",
		temp: "",
		description: "",
		city: "",
		country: "",
	});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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

	const onChange = (e: FormEvent<HTMLInputElement>) =>
		setLocation(e.currentTarget.value);
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="A PWA weather application built in Next.js"
				/>
				<link rel="apple-touch-icon" href="/images/apple180.png" />
				<link rel="manifest" href="./manifest.json" />
				<script
					async
					src="https://unpkg.com/pwacompat"
					crossOrigin="anonymous"
				></script>
				<meta name="theme-color" content="#133ecc"></meta>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				></meta>
				<title>Weather</title>
			</Head>
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
