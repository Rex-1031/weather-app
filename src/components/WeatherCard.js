import moment from 'moment';
import "../App.css"

const WeatherCard = ({weatherData}) => {
  return (
    <div>
      {(typeof  weatherData.main != 'undefined')?(
            <div className='card'>
            <h3 className='card-title'>{moment().format('ddd')}</h3>
            <img className='card-img' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='weather icon' />
            <div className='card-content'>
            <p>{Math.round(1.8*(weatherData.main.temp_min - 273)+32)} &deg;</p>
            <p>{Math.round(1.8*(weatherData.main.temp_max - 273)+32)} &deg;</p>
            </div>
        </div>
            
        ):(<div></div>)}
    </div>
    
  )
}

export default WeatherCard