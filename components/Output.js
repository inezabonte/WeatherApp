import Image from 'next/image'

function Output(props) {
  const { weatherData } = props;
  return (
        <div className="results">

          {weatherData.icon && (
            <div className="icon">
              <Image src={`/weathericons/${weatherData.icon}.svg`} width={128} height={128} />
            </div>
          ) }

          {weatherData.temp && (
            <p className="temp">{weatherData.temp}&deg;C</p>
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
