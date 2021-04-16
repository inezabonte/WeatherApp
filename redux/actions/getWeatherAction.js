import Axios from 'axios';
import * as t from './types'

export const getWeather = (city) => dispatch => {
 return Axios.get('https://api.openweathermap.org/data/2.5/weather',{
   params: {
     q: city,
     units: 'metric',
     appid: process.env.NEXT_STATIC_API_KEY
   }
 })
    .then(res => {
      const payload = {
        icon: res.data.weather[0].icon,
        temp: Math.round(res.data.main.temp).toString(),
        description: res.data.weather[0].description,
        city: res.data.name,
        country: res.data.sys.country,
      }

      dispatch({
        type: t.FETCH_WEATHER_SUCCESS,
        payload: payload
      })
    })
  .catch(err => {
    dispatch({
      type: t.FETCH_WEATHER_ERROR,
      error: err
    })
  })
  

  
};

export const updateInput = (city) => dispatch => {
  dispatch({
    type: t.UPDATE_INPUT,
    payload: city
  })

}
