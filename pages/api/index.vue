<script setup>
import { ref, onMounted } from "vue";
// import weatherAPI from "~/components/weatherAPI.vue";
// const weather = ref([]);
// onMounted(async () => {
//   try {
//     //fetching the data from the API
//     const response = await fetch(
//       "https://api.open-meteo.com/v1/forecast?latitude=47.6597&longitude=-117.4291&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=3"
//     );
//     weather.value = await response.json();
//     console.log(weather.value);
//   } catch (error) {
//     console.error(error);
//   }
// });
</script>

<template>
  <div class="weather-card card">
    <div class="row">
      <div class="col-lg-6 col-md-12 card-title">
        <div class="weather">
          <!-- <h2>&mdash;{{ getCurrentInstance.weather.temperature }}</h2> -->
          <h2>&mdash;</h2>
          <span class="temperature">°F</span>
          <p>&mdash;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
