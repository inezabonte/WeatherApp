import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, UPDATE_INPUT } from '../actions/getWeatherAction'

const initialState = {
  city: '',
  weatherData: {},
  error: null
};

export const fetchWeatherData = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        city: action.payload,
      };
    case FETCH_WEATHER_SUCCESS:
      return{
        ...state,
        weatherData: action.payload
      }
    case FETCH_WEATHER_ERROR:
      return{
        ...state,
        weatherData: {icon: 'unknown'},
        error: action.error
      }
    default:
      return state;
  }
}

