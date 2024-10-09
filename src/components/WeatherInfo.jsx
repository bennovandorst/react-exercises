const WeatherInfo = ({weatherData}) => {
    return (
      <>
        {weatherData && (
          <div className='weather'>
            <h2>{weatherData.name} ❄️</h2>
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