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
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <input 
            type="text"
            placeholder="Zoek een stad op"
            value={searchInput}
            onChange={handleChange}
            name="search"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button 
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="mt-6 w-full max-w-md">
        <WeatherInfo weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App
