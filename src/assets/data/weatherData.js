const weatherData = {
  request: {
    type: "City",
    query: "New York, United States of America",
    language: "en",
    unit: "m",
  },
  location: {
    name: "New York",
    country: "United States of America",
    region: "New York",
    lat: "40.714",
    lon: "-74.006",
    timezone_id: "America/New_York",
    localtime: "2020-06-28 10:19",
    localtime_epoch: 1593339540,
    utc_offset: "-4.0",
  },
  current: {
    observation_time: "02:19 PM",
    temperature: 29,
    weather_code: 116,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
    ],
    weather_descriptions: ["Partly cloudy"],
    wind_speed: 9,
    wind_degree: 60,
    wind_dir: "ENE",
    pressure: 1007,
    precip: 0,
    humidity: 57,
    cloudcover: 75,
    feelslike: 10,
    uv_index: 7,
    visibility: 16,
    is_day: "yes",
  },
};

export default weatherData;
