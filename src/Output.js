import React from 'react';

function Output (props) {

  const weatherData = props.weatherData
  return (
    <> 
    {weatherData && 
    <div className='results'>
        <div className='icon'>
          <img src={`./weathericons/${props.weatherData.icon}.svg`} alt=""/>
        </div>
    <p className='temp'>{`${weatherData.temp}`}&deg;C</p>
    <p className='desc'>{weatherData.description}</p>
    <p className='city'>{weatherData.city}, {weatherData.country}</p>
      </div>}
      
    </>
  )
  
}

export default Output;