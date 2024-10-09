<script setup>
import { ref } from "vue";
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <NuxtLink
        to="/"
        class="navbar-brand text-white d-flex justify-content-center ml-2"
        >Home</NuxtLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-center py-3"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link text-white">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/imagePage" class="nav-link text-white"
              >Images</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/accordion" class="nav-link text-white"
              >Accordion</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/grid" class="nav-link text-white">Grid</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/api" class="nav-link text-white">Weather</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  color: black;
}
.nav-link {
  color: black;
  font-size: 2em;
}
</style>
