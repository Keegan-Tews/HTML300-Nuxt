<script setup>
import { ref } from "vue";

const name = ref("Overview of Parks in the Area");

const headerOne = ref("Parks");
const headerTwo = ref("Dog Parks");
const headerThree = ref("Hiking Parks in the Area");
const gridOne = ref([
  {
    class: `col-lg-12 text-center`,
    title: `Parks Your Area`,
    body: `This is a list of parks in your area.`,
  },
  {
    class: `col-lg-3 text-center`,
    title: `Park One`,
    body: `This is a park in your area.`,
  },
  {
    class: `col-lg-3 text-center`,
    title: `Park Two`,
    body: `This is a park in your area.`,
  },
  {
    class: `col-lg-3 text-center`,
    title: `Park Three`,
    body: `This is a park in your area.`,
  },
  {
    class: `col-lg-3 text-center`,
    title: `Park Four`,
    body: `This is a park in your area.`,
  },
]);
const gridTwo = ref([
  {
    class: `col-lg-12 text-center`,
    title: `Dog Park in Your Area`,
    body: `This is a list of dog parks in your area.`,
  },
  {
    class: `col-lg-6 text-center`,
    title: `Dog Park One`,
    body: `This is a Dog Park in your area.`,
  },
  {
    class: `col-lg-6 text-center`,
    title: `Dog Park Two`,
    body: `This is a Dog Park in your area.`,
  },
  {
    class: `col-lg-6 text-center`,
    title: `Dog Park Three`,
    body: `This is a Dog Park in your area.`,
  },
  {
    class: `col-lg-6 text-center`,
    title: `Dog Park Four`,
    body: `This is a Dog Park in your area.`,
  },
]);

const gridThree = ref([
  {
    class: `col-lg-12 text-center`,
    title: `Hiking Park in Your Area`,
    body: `This is a list of Hiking Parks in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park One`,
    body: `This is a Hiking Park in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park Two`,
    body: `This is a Hiking Park in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park Three`,
    body: `This is a Hiking Park in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park Four`,
    body: `This is a Hiking Park in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park Five`,
    body: `This is a Hiking Park in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park Six`,
    body: `This is a Hiking Park in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park Seven`,
    body: `This is a Hiking Park in your area.`,
  },
  {
    class: `col-lg-4 text-center`,
    title: `Hiking Park Eight`,
    body: `This is a Hiking Park in your area.`,
  },
]);
</script>

<template>
  <div class="container">
    <h2 class="d-flex justify-content-center align-items-center text-center">
      {{ name }}
    </h2>
    <div class="row bg-primary">
      <h3>{{ headerOne }}</h3>
      <div :class="gOne.class" v-for="gOne in gridOne" :key="gOne.title">
        <h3 class="text-center">{{ gOne.title }}</h3>
        <p>{{ gOne.body }}</p>
      </div>
    </div>

    <div class="row bg-info">
      <h3>{{ headerTwo }}</h3>
      <div :class="gTwo.class" v-for="gTwo in gridTwo" :key="gTwo.title">
        <h3 class="text-center">{{ gTwo.title }}</h3>
        <p>{{ gTwo.body }}</p>
      </div>
    </div>

    <div class="row bg-warning">
      <h3>{{ headerThree }}</h3>
      <div
        :class="gThree.class"
        v-for="gThree in gridThree"
        :key="gThree.title"
      >
        <h3 class="text-center">{{ gThree.title }}</h3>
        <p>{{ gThree.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,
h3,
p {
  color: black;
}
</style>
