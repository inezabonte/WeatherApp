import * as t from '../actions/types'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  city: '',
  weatherData: {},
  error: null
};

export const fetchWeatherData = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload}
    case t.UPDATE_INPUT:
      return {
        ...state,
        city: action.payload,
      };
    case t.FETCH_WEATHER_SUCCESS:
      return{
        ...state,
        weatherData: action.payload
      }
    case t.FETCH_WEATHER_ERROR:
      return{
        ...state,
        weatherData: {icon: 'unknown'},
        error: action.error
      }
    default:
      return state;
  }
}

