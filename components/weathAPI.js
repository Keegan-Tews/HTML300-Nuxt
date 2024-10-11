const panel = document.querySelector("div.weather");
const temp = panel.querySelector("span.temperature");
const weather = panel.querySelector("p");

const codeToWeather = (code) => {
  switch (code) {
    case 0:
      return "Clear Skies";
    case 1:
      "Mainly Clear";
    case 2:
      "Partly Cloudy";
    case 3:
      "Overcast";
    case 45:
      "Fog";
    case 48:
      "Dense Fog";
    case 51:
      "Light Showers";
    case 53:
      "Showers";
    case 55:
      "Heavy Showers";
    case 56:
      "Freezing Drizzle Light";
    case 57:
      "Freezing Drizzle Heavy";
    case 61:
      "Light Rain";
    case 63:
      "Rain";
    case 65:
      "Heavy Rain";
    case 66:
      "Freezing Rain Light";
    case 67:
      "Freezing Rain Heavy";
    case 71:
      "Light Snowfall";
    case 73:
      "Snowfall";
    case 75:
      "Heavy Snowfall";
    case 77:
      "Snow Grains";
    case 80:
      "Light Snow Showers";
    case 81:
      "Snow Showers";
    case 82:
      "Heavy Snow Showers";
    case 85:
      "Light Ice Pellets";
    case 86:
      "Ice Pellets";
    case 95:
      "Thunderstorm";
    case 96:
      "Heavy Thunderstorm";
    case 99:
      "Hail";
    default:
      return "Unknown";
  }
};

const grab = async () => {
  const request = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=47.6597&longitude=-117.4291&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=3"
  );

  const response = await request.json();

  temp.innerHTML = "${Math.round(response.current_weather.temperature)} °F";
  weather.innerHTML = codeToWeather(
    response.current_weather.weather_code.value
  );
};

grab();
