import React, { Component } from 'react';
import Output from './Output';
import '../index.css';
import {getWeather,  updateInput} from '../redux/actions/getWeatherAction';
import { connect } from 'react-redux';
class Home extends Component {

  state = {
    query: '',
    weather: {}
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.getWeather(this.props.city)
  }

  onChange = (e) => {
    this.props.updateInput(e.target.value)
  }

  render() {
    return (
      <div>
        <div className="container">
          <p className="title">Weather</p>
          <form onSubmit={ this.onSubmit }>
            <input type="text" id="input-value" placeholder="Enter city name" value={ this.props.city } onChange={ this.onChange } />
            <input type="submit" className="submit" value="Search" />
          </form>
          <Output weatherData={this.props.weatherData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    city: state.fetchWeather.city,
    weatherData: state.fetchWeather.weatherData
  }
}

export default connect(mapStateToProps,{updateInput, getWeather})(Home);
