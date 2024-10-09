<script setup>
import { ref } from "vue";
const title = ref("Dog Parks");
</script>
<!-- final attempt at slots I hope this is what you are looking for -->
<template>
  <div class="row bg-primary align-items-center p-0 m-0">
    <div class="col-lg-4 p-3 text-center">
      <slot name="left"></slot>
    </div>
    <div class="col-lg-4 p-3 text-center">
      <slot name="center">{{ title }}</slot>
    </div>
    <div class="col-lg-4 p-3 text-center">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped></style>
