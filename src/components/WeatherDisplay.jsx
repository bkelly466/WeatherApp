import React from 'react';
import useWeather from '../hooks/useWeather';

const WeatherDisplay = () => {
  const { data, loading, error } = useWeather();

  if (loading) {
    return <p className="py-10 text-center text-slate-500">Loading...</p>;
  }

  if (error) {
    return (
      <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700">
        Error: {error}
      </p>
    );
  }

  if (data) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-slate-800">{data.name}</h2>

        <img
          className="mx-auto h-28 w-28"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />

        <p className="text-6xl font-bold tracking-tight text-slate-900">
          {Math.round(data.main.temp)}°F
        </p>
        <p className="mt-1 capitalize text-slate-500">{data.weather[0].description}</p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-slate-50 px-2 py-3">
            <p className="text-xs uppercase tracking-wide text-slate-400">Feels Like</p>
            <p className="mt-1 font-semibold text-slate-800">
              {Math.round(data.main.feels_like)}°F
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 px-2 py-3">
            <p className="text-xs uppercase tracking-wide text-slate-400">Humidity</p>
            <p className="mt-1 font-semibold text-slate-800">{data.main.humidity}%</p>
          </div>
          <div className="rounded-lg bg-slate-50 px-2 py-3">
            <p className="text-xs uppercase tracking-wide text-slate-400">Wind</p>
            <p className="mt-1 font-semibold text-slate-800">{data.wind.speed} mph</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <p className="py-10 text-center text-slate-500">
      Please search for a city to display weather data.
    </p>
  );
};

export default WeatherDisplay;