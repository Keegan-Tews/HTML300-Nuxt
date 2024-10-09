<script setup>
import { defineProps, ref } from "vue";

// Prop with type validator and default value
const props = defineProps({
  src: String,
  alt: String,
  title: String,
  class: String,
  index: Number,
});

const hasBoarder = ref(false);
function toggleBoarder(i, index) {
  this.hasBoarder = !this.hasBoarder;
  if (this.hasBoarder === true) {
    console.log(index + "is active");
    i.target.style.border = "2px solid red";
  } else {
    console.log(index + "is not active");
    i.target.style.border = "none";
  }
}
</script>

<template>
  <div class="col-3">
    <img
      :key="index"
      :src="props.src"
      :alt="props.alt"
      :title="props.title"
      :class="props.class"
      @click="toggleBoarder($event, index)"
    />
  </div>
</template>

<style scoped></style>
