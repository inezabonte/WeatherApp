import Axios from 'axios';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'
export const UPDATE_INPUT = 'UPDATE_INPUT'

export const getWeather = (city) => dispatch => {
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      const payload = {
        icon: res.data.weather[0].icon,
        temp: Math.floor(res.data.main.temp),
        description: res.data.weather[0].description,
        city: res.data.name,
        country: res.data.sys.country,
      }

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: payload
      })
    })
  .catch(err => {
    dispatch({
      type: FETCH_WEATHER_ERROR,
      error: err
    })
  })
  

  
};

export const updateInput = (city) => dispatch => {
  dispatch({
    type: UPDATE_INPUT,
    payload: city
  })

}