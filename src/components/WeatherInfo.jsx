const WeatherInfo = ({ weatherData }) => {
  return (
    <>
      {weatherData && (
        <div className="weather bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            {weatherData.name} 
            <img 
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
              alt="weather-icon" 
              className="ml-2"
            />
          </h2>
          <p className="text-lg mb-2">Temperatuur: {weatherData.main.temp} °C</p>
          <p className="text-lg mb-2">Gevoelstemperatuur: {weatherData.main.feels_like} °C</p>
          <p className="text-lg mb-2">Luchtvochtigheid: {weatherData.main.humidity}%</p>
          <p className="text-lg">Windsnelheid: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </>
  );
}

export default WeatherInfo;