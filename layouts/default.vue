<script setup>
import { ref } from "vue";
import NavBar from "~/components/NavBar.vue";
import NuxtFooter from "~/components/NuxtFooter.vue";
import NuxtHeader from "~/components/NuxtHeader.vue";

const title = ref("Dog Parks");
const info = ref("Dog Parks in the Area");
</script>

<template>
  <div>
    <!-- Setting up the default page structure here -->
    <NuxtHeader>
      <template #left>
        <img
          src="../public/tennis-1381230_640.jpg"
          class="img-fluid"
          alt="Tennis ball with water flinging off of it."
          width="150"
          height="150"
        />
      </template>
      <template #center>
        <h2>{{ title }}</h2>
      </template>
      <template #right>
        <h2>{{ info }}</h2>
      </template>
      <!-- header component -->
    </NuxtHeader>
    <NavBar />
    <!-- routing component -->

    <slot />
    <!-- theoretically changing page content goes here  -->

    <NuxtFooter />
  </div>
</template>

<style></style>
