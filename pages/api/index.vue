<script setup>
import { ref, onMounted } from "vue";
import weatherAPI from "~/components/weatherAPI.vue";
const weather = ref([]);
onMounted(async () => {
  try {
    //fetching the data from the API
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=47.6597&longitude=-117.4291&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=3"
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
          :temperature_unit="p.temperature_unit"
          :wind_speed_unit="p.wind_speed_unit"
          :precipitation_unit="p.precipitation_unit"
          :timezone="p.timezone"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
