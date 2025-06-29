import axios from "axios";
import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleChange = (event) => {
    const cityName = event.target.value;
    setCity(cityName);
  };

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"11b89cfbfda11a64c13ae7097bb650bd"}`
      );
      setWeather(response);

      // console.log("res", response);
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const handleClick = () => {
    fetchApi();
  };

  return (
    <div className="bg-blue-300 min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Weather App
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleClick}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Search
          </button>
          {weather && (
            <>
              <div>
                <h2>{weather.data.name}</h2>
                <p>Temp is {weather.data.temp}</p>
                <p>{weather.data.weather[0].description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
