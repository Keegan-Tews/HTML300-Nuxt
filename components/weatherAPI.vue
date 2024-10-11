<script setup>
// import { ref, defineProps } from "vue";

// const weatherProps = defineProps({
//   latitude: Number,
//   longitude: Number,
//   temperature_2m: Number,
//   relative_humidity_2m: Number,
//   precipitation: Number,
//   temperature_unit: String,
//   wind_speed_unit: String,
//   precipitation_unit: String,
//   timezone: String,
// });
</script>

<template>
  <!-- <div class="weather-card card">
    <div class="row">
      <div class="col-lg-6 col-md-12 card-title">
        current temperature is: {{ weatherProps.temperature_2m }}
        {{ weatherProps.temperature_unit }}
      </div>
      <div class="col-lg-6 col-md-12 card-title">
        current humidity is: {{ weatherProps.relative_humidity_2m }} %
      </div>
      <div class="col-lg-6 col-md-12 card-title">
        current wind speed is: {{ weatherProps.wind_speed_10m }}
        {{ weatherProps.wind_speed_unit }}
      </div>
      <div class="col-lg-6 col-md-12 card-title">
        current precipitation is: {{ weatherProps.precipitation }}
        {{ weatherProps.precipitation_unit }}
      </div>
    </div>
  </div> -->
</template>

<style scoped></style>

<!-- https://api.open-meteo.com/v1/forecast?latitude=47.6597&longitude=-117.4291&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,snow_depth&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=3 -->
