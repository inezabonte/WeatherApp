import React from 'react';

function Output(props) {
  const { weatherData } = props;
  console.log(weatherData)
  return (
        <div className="results">

          {weatherData.icon && (
            <div className="icon">
            <img src={`./weathericons/${weatherData.icon}.svg`} alt="" />
          </div>
          ) }

          {weatherData.temp && (
            <p className="temp">
            {`${weatherData.temp}`}
            &deg;C
          </p>
          )}
          
          {weatherData.description && (
            <p className="desc">{weatherData.description}</p>
          )}

          {weatherData.city && (
            <p className="city">
            {weatherData.city}
            ,
            {' '}
            {weatherData.country}
          </p>
          )}
          
        </div>
      
  );
}

export default Output;
