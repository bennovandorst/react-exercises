import { useState, useEffect } from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const apiKey = '1e30fd44ccc54c5f601162c743d72a5c';

  useEffect(() => {
    if (!city) return;

    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [city]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  };

  const handleSearch = () => setCity(searchInput);
  return (
    <>
        <div className='search'>
          <input 
            type="text"
            placeholder="Zoek een stad op"
            value={searchInput}
            onChange={handleChange}
            name="search"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      <WeatherInfo weatherData={weatherData} />
    </>
  );
}

export default App;
