<script setup>
import { onMounted, ref } from "vue";
import imageList from "~/components/imageList.vue";

const name = ref("Images submitted by users of our parks");
const images = ref([
  {
    src: "https://images.pexels.com/photos/236940/pexels-photo-236940.jpeg",
    alt: "park",
    title: "park",
    class: "img-fluid h-100 p-0 d-block mx-auto",
  },
  {
    src: "/med1.jpg",
    alt: "park",
    title: "park",
    class: "img-fluid h-100 p-0 d-block mx-auto",
  },
  {
    src: "/med2.jpg",
    alt: "park",
    title: "park",
    class: "img-fluid h-100 p-0 d-block mx-auto",
  },
  {
    src: "/med3.jpg",
    alt: "park",
    title: "park",
    class: "img-fluid h-100 p-0 d-block mx-auto",
  },
  {
    src: "/med4.jpg",
    alt: "park",
    title: "park",
    class: "img-fluid h-100 p-0 d-block mx-auto",
  },
  {
    src: "/med1.jpg",
    alt: "park",
    title: "park",
    class: "img-fluid h-100 p-0 d-block mx-auto",
  },
  {
    src: "/med2.jpg",
    alt: "park",
    title: "park",
    class: "img-fluid h-100 p-0 d-block mx-auto",
  },
]);
// const showElement = setTimeout(() => {
//   console.log('showElement')
//   this.showElement = true
// }, 10000)
// const toggle = ref(false)

const toggle = ref(false);
const showElement = ref(false);

onMounted(() => {
  setTimeout(() => {
    console.log("showElement");
    showElement.value = true;
  }, 10000);
});
</script>

<template>
  <h2 class="d-flex justify-content-center align-items-center text-center">
    {{ name }}
  </h2>
  <div class="img-container mt-5 d-flex flex-wrap gap-1 justify-content-center">
    <imageList
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      :title="image.title"
      :class="image.class"
      :index="index"
    />
  </div>

  <!-- required v-if and v-else directives -->
  <div class="container">
    <button @click="toggle = !toggle" class="btn btn-primary mt-3">
      {{ toggle ? "Not a fan?" : "Do you like dogs?" }} If so click here
    </button>

    <transition name="fade2">
      <div v-if="toggle">
        <p class="text-center mt-3">I like dog too!</p>
      </div>
      <div v-else="(showElement = true)">
        <p class="text-center mt-3">I don't like dogs either.</p>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
