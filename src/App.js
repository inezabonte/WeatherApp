import React, {useState} from 'react'
import Axios from 'axios'
import Output from './Output';

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState('')


  const getWeather = async () => {
    const result = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    const final={
      icon: result.data['weather'][0]['icon'],
      temp: Math.floor(result.data['main']['temp']),
      description: result.data['weather'][0]['description'],
      city: result.data['name'],
      country: result.data['sys']['country'] 
    }
    setWeather(final)
    setQuery('')
  }

  const onSubmit = e => {
    e.preventDefault();
    
    getWeather()
  }

  const onChange = e => {
    setQuery(e.target.value)
  }

  return (
    <div className='container'>
      <p className='title'>Weather</p>
      <form onSubmit= {onSubmit}>
        <input type="text" id='input-value' placeholder='Enter city name' value={query} onChange={onChange}/>
        <input type="submit" className="submit" value="Search" />
      </form>
      <Output weatherData={weather} />
    </div>
    
  );
}

export default App;
