import React from 'react';

function Output(props) {
  const { weatherData } = props;
  console.log(weatherData)
  return (
    <>
      {(typeof weatherData.country !== 'undefined') ? (
        <div className="results">
          <div className="icon">
            <img src={`./weathericons/${weatherData.icon}.svg`} alt="" />
          </div>
          <p className="temp">
            {`${weatherData.temp}`}
            &deg;C
          </p>
          <p className="desc">{weatherData.description}</p>
          <p className="city">
            {weatherData.city}
            ,
            {' '}
            {weatherData.country}
          </p>
        </div>
      ) : ('') }

    </>
  );
}

export default Output;
