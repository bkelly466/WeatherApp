import WeatherDisplay from './components/WeatherDisplay';
import useWeather from './hooks/useWeather';
import { useState } from 'react';

function App() {

  const [city, setCity] = useState('');
  const { fetchWeather } = useWeather();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">Weather App</h1>
        <form onSubmit={handleSearch} className="mb-6 flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-sky-600 px-5 py-2 font-medium text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Search
          </button>
        </form>
        <WeatherDisplay />
      </div>
    </div>
  )
}

export default App