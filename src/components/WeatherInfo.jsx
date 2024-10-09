const WeatherInfo = ({weatherData}) => {
    return (
      <>
        {weatherData && (
          <div className='weather'>
            <h2>{weatherData.name} <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon" /></h2>
            <p>Temperatuur: {weatherData.main.temp} °C</p>
            <p>Gevoelstemperatuur: {weatherData.main.feels_like} °C</p>
            <p>Luchtvochtigheid: {weatherData.main.humidity}%</p>
            <p>Windsnelheid: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </>
    );
  }
 
export default WeatherInfo;