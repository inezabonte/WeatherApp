import { combineReducers } from 'redux';
import {fetchWeatherData} from './weatherReducer';

const reducers = combineReducers({
  fetchWeather: fetchWeatherData
});

export default reducers;
