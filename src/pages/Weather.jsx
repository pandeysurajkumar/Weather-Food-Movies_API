import { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Jalandhar");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (cityName) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e963392523de99885b2c59657895fdb1&units=metric`
    );
    const data = await res.json();

    if (data.cod === 200) {
      setWeather(data);
    } else {
      setWeather(null);
      alert("City not found");
    }
  };

  // ✅ Load default city
  useEffect(() => {
    fetchWeather("Jalandhar");
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-r from-teal-300 to-cyan-400 flex flex-col items-center py-10">

      <h1 className="text-4xl font-semibold text-gray-700 mb-6">
        Weather App
      </h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter City"
          className="w-72 p-3 rounded-full shadow outline-none bg-amber-50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={() => fetchWeather(city)}
          className="bg-white px-4 rounded-full shadow"
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="bg-white w-96 rounded-3xl shadow-xl p-8 text-center mt-8">
          <h2 className="text-2xl text-gray-600">{weather.name}</h2>
          <h1 className="text-6xl font-light my-4">
            {weather.main.temp}°C
          </h1>

          <p className="text-gray-500">
            {weather.weather[0].main}
          </p>

          <img
            className="mx-auto my-4"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />

          <div className="flex justify-between mt-6">
            <div>
              <p className="text-xl">{weather.main.feels_like}°C</p>
              <p className="text-sm text-gray-400">Feels Like</p>
            </div>
            <div>
              <p className="text-xl">{weather.main.humidity}%</p>
              <p className="text-sm text-gray-400">Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
