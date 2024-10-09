<script setup>
import { ref } from "vue";
// imports the HomeImages component and Vue's ref function to manage reactivity
import HomeImages from "~/components/HomeImages.vue";

// array of images
const images = ref([
  {
    src: "/med1.jpg",
    alt: "Park",
    title: "Park",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/med2.jpg",
    alt: "Park",
    title: "Park",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/med3.jpg",
    alt: "Park",
    title: "Park",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]);

const toggle = ref(false);
</script>

<template>
  <div class="img-container mt-5 d-flex flex-wrap gap-1 justify-content-center">
    <NavSlot>
      <slot name="header">
        <h1>{{ title }}</h1>
      </slot>
    </NavSlot>
  </div>
  <div class="container">
    <h3 class="text-center mt-5">Dog Parks in the area</h3>
    <div class="row">
      <div class="col-md-8 mx-auto">
        <button @click="toggle = !toggle" class="btn btn-primary mt-3">
          {{ toggle ? "Hide" : "Show" }} Images
        </button>
        <transition name="fade">
          <div
            v-if="toggle"
            class="d-flex flex-wrap gap-1 justify-content-center"
          >
            <HomeImages
              v-for="(image, index) in images"
              :key="index"
              :src="image.src"
              :alt="image.alt"
              :title="image.title"
              :class="image.class"
              :index="index"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
