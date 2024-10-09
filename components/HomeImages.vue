<script setup>
import { ref } from "vue";
import imageMixin from "@/Mixin/imageMixin";

const borderVisible = ref(false);

// Mixin
function toggleBorder() {
  borderVisible.value = !borderVisible.value;
}

defineProps({
  src: {
    type: String,
    required: true,
    validator: function (value) {
      const validFormats = /\.(jpeg|jpg|gif|png)$/i;
      return validFormats.test(value);
    },
  },
  title: {
    type: String,
    default: "Park",
  },
});
</script>

<template>
  <div @click="toggleBorder" class="col-3">
    <img
      class="img-fluid"
      :src="src"
      :class="{ 'image-border': borderVisible }"
    />
  </div>
</template>

<style scoped>
.image-border {
  border: 2px solid red;
}
</style>
