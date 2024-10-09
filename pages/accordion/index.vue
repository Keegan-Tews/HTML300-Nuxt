<script setup>
import { ref } from "vue";

const name = ref("Facts about National Parks");
//park data
const parks = ref([
  {
    name: "Yellowstone National Park",
    pros: ["Wildlife", "Geysers", "Hiking"],
    description:
      "Yellowstone National Park is a national park located primarily in the U.S. state of Wyoming, although it also extends into Montana and Idaho. It was established by the U.S. Congress and signed into law by President Ulysses S. Grant on March 1, 1872. Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world. The park is known for its wildlife and its many geothermal features, especially Old Faithful geyser, one of its most popular features. It has many types of ecosystems, but the subalpine forest is the most abundant. It is part of the South Central Rockies forests ecoregion.",
    alt: "Yellowstone National Park",
  },
  {
    name: "Yosemite National Park",
    pros: ["Waterfalls", "Hiking", "Rock Climbing"],
    description:
      "Yosemite National Park is an American national park located in the western Sierra Nevada of Central California, bounded on the southeast by Sierra National Forest and on the northwest by Stanislaus National Forest. The park is managed by the National Park Service and covers an area of 748,436 acres (1,169 sq mi; 3,029 km2) and sits in four counties: centered in Tuolumne and Mariposa, extending north and east to Mono and south to Madera County. Designated a World Heritage Site in 1984, Yosemite is internationally recognized for its granite cliffs, waterfalls, clear streams, giant sequoia groves, lakes, mountains, meadows, glaciers, and biological diversity. Almost 95% of the park is designated wilderness.",
    alt: "Yosemite National Park",
  },
  {
    name: "Grand Canyon National Park",
    pros: ["Hiking", "Rafting", "Scenic Views"],
    description:
      "Grand Canyon National Park, located in northwestern Arizona, is the 15th site in the United States to have been named a national park. The park's central feature is the Grand Canyon, a gorge of the Colorado River, which is often considered one of the Wonders of the World. The park, which covers 1,217,262 acres (1,901.972 sq mi; 4,926.08 km2) of unincorporated area in Coconino and Mohave counties, received more than six million recreational visitors in 2017, which is the second highest count of all American national parks after Great Smoky Mountains National Park. The Grand Canyon was designated a World Heritage Site by UNESCO in 1979.",
    alt: "Grand Canyon National Park",
  },
]);
// tracks what item is open
const openItems = ref([]);

// toggles the collapse
const toggleCollapse = (index) => {
  if (openItems.value.includes(index)) {
    openItems.value = openItems.value.filter((i) => i !== index);
  } else {
    openItems.value.push(index);
  }
};

const isOpen = (index) => {
  return openItems.value.includes(index);
};
</script>

<template>
  <h2 class="d-flex justify-content-center align-items-center text-center">
    {{ name }}
  </h2>
  <div
    class="background-container d-flex flex-colum justify-content-center align-items-center text-center"
  >
    <div class="container my-5 flex-grow-1 overflow-auto">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="accordion" id="parksAccordion">
            <div
              class="accordion-item"
              v-for="(park, index) in parks"
              :key="index"
            >
              <h2 class="accordion-header" id="heading + index">
                <button
                  class="accordion-button"
                  type="button"
                  @click="toggleCollapse(index)"
                  :aria-expanded="isOpen(index) ? 'true' : 'false'"
                  :aria-controls="'collapse' + index"
                >
                  {{ park.name }}
                </button>
              </h2>
              <div
                :id="'collapse' + index"
                class="accordion-collapse collapse"
                :class="{ show: isOpen(index) }"
                :aria-labelledby="'heading' + index"
              >
                <div class="accordion-body text-start">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="(pro, i) in parks.pros"
                      :key="i"
                    >
                      {{ pro }}
                    </li>
                  </ul>
                  <p class="mt-3">{{ park.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
