<script setup>
import { ref, defineProps } from "vue";

const weatherProps = defineProps({
  latitude: Number,
  longitude: Number,
  temperature_2m: Number,
  relative_humidity_2m: Number,
  precipitation: Number,
  temperature_unit: String,
  wind_speed_unit: String,
  precipitation_unit: String,
  timezone: String,
});
</script>

<template>
  <div class="weather-card card">
    <div class="row">
      <div class="col-lg-6 col-md-12 card-title">Location</div>
      <p class="col-lg-6 col-md-12">
        Latitude:{{ weatherProps.latitude }}, Longitude:{{
          weatherProps.longitude
        }}
      </p>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 card-title">Temperature</div>
      <p class="col-lg-6 col-md-12">
        Current Temperature:{{ weatherProps.temperature_2m }}, Relative
        Humidity:{{ weatherProps.relative_humidity_2m }}, High/Low:{{
          weatherProps.temperature_2m_max
        }}/{{ weatherProps.temperature_2m_min }},
      </p>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 card-title">Precipitation</div>
      <p class="col-lg-6 col-md-12">
        Precipitation:{{ weatherProps.precipitation }}, Rain:{{
          weatherProps.rain
        }}, Showers:{{ weatherProps.showers }}, Snowfall:{{
          weatherProps.snowfall
        }}, Snow Depth:{{ weatherProps.snow_depth }},
      </p>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 card-title">Wind Speed</div>
      <p class="col-lg-6 col-md-12">
        Wind Speed:{{ weatherProps.wind_speed_unit }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>

<!-- https://api.open-meteo.com/v1/forecast?latitude=47.6597&longitude=-117.4291&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,snow_depth&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=3 -->
