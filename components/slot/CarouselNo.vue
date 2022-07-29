<template>
  <VueSlickCarousel v-bind="settings">
    <slot></slot>
  </VueSlickCarousel>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data: () => ({
    model: null,
    settings: {
      // centerMode: true,
      focusOnSelect: true,
      initialSlide: 0,
      infinite: false,
      slidesToShow: 2.2,
      slidesToScroll: 1,
      speed: 300,
      dots: false,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1.8,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1.6,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1,
          },
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 0.95,
          },
        },
      ],
    },
  }),
  components: { VueSlickCarousel },
};
</script>
