<template>
  <!-- <v-sheet background="transparent"> -->
  <!-- <v-slide-group
      v-model="model"
      class="slide-group-custom"
      center-active="true"
      hide-delimiter-background
      show-arrows-on-hover
      :show-arrows="false"
      multiple="true"

    >
      <v-slide-item v-for="i in 6" :key="i">
        <v-card class="card-slid-custom" max-width="300" @click="test">
          <img class="img-custom" src="@/static/img/img-4.jpg" />
        </v-card>
      </v-slide-item>
    </v-slide-group> -->

  <SlotCarouselTimer  >
    <div v-for="i in 6" :key="i" max-width="400px">
      <v-card class="card-slid-custom"  @click="test">
        <img class="img-custom w-100" src="@/static/img/img-4.jpg" />
      </v-card>
    </div>
  </SlotCarouselTimer>

  <!-- </v-sheet> -->
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data: () => ({
    model: null,
    settings: {
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
    },
  }),
  methods: {
    test: () => {
      console.log("test clickItem");
    },
  },
  components: { VueSlickCarousel },

};
</script>
