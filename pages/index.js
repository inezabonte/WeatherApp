import Output from '../components/Output';
import Header from '../components/Header'
import {getWeather,  updateInput} from '../redux/actions/getWeatherAction';
import { connect } from 'react-redux';

function Home (props) {

  const onSubmit = (e) => {
    e.preventDefault();
    props.getWeather(props.city)
  }

  const onChange = (e) => {
    props.updateInput(e.target.value)
  }
    return (
      <div>
        <Header />
        <div className="container">
          <p className="title">Weather</p>
          <form onSubmit={ onSubmit }>
            <input type="text" id="input-value" placeholder="Enter city name" value={ props.city } onChange={ onChange } />
            <input type="submit" className="submit" value="Search" />
          </form>
          <Output weatherData={ props.weatherData } />
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    city: state.fetchWeather.city,
    weatherData: state.fetchWeather.weatherData
  }
}

export default connect(mapStateToProps,{updateInput, getWeather})(Home);
