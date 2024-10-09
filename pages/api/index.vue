<script setup>
import { ref, onMounted } from "vue";
import weatherAPI from "~/components/weatherAPI.vue";
const weather = ref([]);
onMounted(async () => {
  try {
    //fetching the data from the API
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=47.6597&longitude=-117.4291&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,snow_depth&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=3"
    );
    weather.value = await response.json();
    console.log(weather.value);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="container">
    <ul
      class="card-container d-flex flex-wrap justify-content-evenly mx-auto flex-wrap gap-2"
    >
      <li v-for="p in weather" :key="p.latitude">
        <weatherAPI
          :latitude="p.latitude"
          :longitude="p.longitude"
          :temperature_2m="p.temperature_2m"
          :relative_humidity_2m="p.relative_humidity_2m"
          :precipitation="p.precipitation"
          :rain="p.rain"
          :showers="p.showers"
          :snowfall="p.snowfall"
          :snow_depth="p.snow_depth"
          :weather_code="p.weather_code"
          :temperature_2m_max="p.temperature_2m_max"
          :temperature_2m_min="p.temperature_2m_min"
          :apparent_temperature_max="p.apparent_temperature_max"
          :apparent_temperature_min="p.apparent_temperature_min"
          :temperature_unit="p.temperature_unit"
          :wind_speed_unit="p.wind_speed_unit"
          :precipitation_unit="p.precipitation_unit"
          :timezone="p.timezone"
          :forecast_days="p.forecast_days"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
