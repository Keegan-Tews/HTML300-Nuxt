// import { ref, onMounted } from 'vue';
// import { fetchWeatherApi } from 'openmeteo';
// import { Step } from '#build/components';

// // create an array from the weather api
// const params = {
//     latitude: 47.6597,
//     longitude: -117.4291,
//     current: ["temperature_2m", "relative_humidity_2m", "precipitation", "rain", "snowfall", "cloud_cover"],
//     hourly: ["temperature_2m", "precipitation", "rain", "snowfall", "showers", "snow_depth"],
//     daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
//     temperature_unit: "fahrenheit",
//     wind_speed_unit: "mph",
//     percent_unit: "inch",
//     time_zone: "America/Los_Angeles",
//     forecast_days: 3
// };

// const url = "https://api.open-meteo.com/v1/forecast";
// const responses = await fetchWeatherApi(url, params);

// // helper
// const range = (start: number, end: number, step: number) =>
//     Array.from({ length: (end - start) / step }, (_, i) => start + i * step);

// const response = responses[0];

// // attribute for time zone location
// const utcOffsetSeconds = response.utcOffsetSeconds;
// const timezone = response.timezone;
// const timezoneAbbreviation = response.timezoneAbbreviation;
// const latitude = response.latitude;
// const longitude = response.longitude;

// const hourly = response.hourly;
// const daily = response.daily;

// const weatherData = {
//     hourly: {
//         time: range(Number(hourly.time[0]), Number(hourly.time[hourly.time.length - 1]), hourly.interval).map(t => new Date((t + utcOffsetSeconds) * 1000)),
//         temperature2m: hourly.variables[0].valuesArray,
//         relativeHumidity2m: hourly.variables[1].valuesArray,
//         precipitation: hourly.variables[2].valuesArray,
//         rain: hourly.variables[3].valuesArray,
//         showers: hourly.variables[4].valuesArray,
//         snowfall: hourly.variables[5].valuesArray,
//         snowDepth: hourly.variables[6].valuesArray,
//         cloudCover: hourly.variables[7].valuesArray,
//     },
//     daily: {
//         time: range(Number(daily.time[0]), Number(daily.time[daily.time.length - 1]), daily.interval).map(t => new Date((t + utcOffsetSeconds) * 1000)),
//         weatherCode: daily.variables[0].valuesArray,
//         temperature2mMax: daily.variables[1].valuesArray,
//         temperature2mMin: daily.variables[2].valuesArray
//     }
// };

// // 'weatherData' now contains a simple array for datetime and weather data

// for (let i = 0; i < weatherData.hourly.time.length; i++) {
//     console.log(
//         weatherData.hourly.time[i].toISOString(),
//         weatherData.hourly.temperature2m[i],
//         weatherData.hourly.relativeHumidity2m[i],
//         weatherData.hourly.precipitation[i],
//         weatherData.hourly.rain[i],
//         weatherData.hourly.showers[i],
//         weatherData.hourly.snowfall[i],
//         weatherData.hourly.snowDepth[i],
//         weatherData.hourly.cloudCover[i]
//     );
// }

// for (let i = 0; i < weatherData.daily.time.length; i++) {
//     console.log(
//         weatherData.daily.time[i].toISOString(),
//         weatherData.daily.weatherCode[i],
//         weatherData.daily.temperature2mMax[i],
//         weatherData.daily.temperature2mMin[i]
//     );
// }
