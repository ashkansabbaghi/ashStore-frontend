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
      infinite: false,
      slidesToShow: 5.2,
      slidesToScroll: 1,
      dots: false,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4.5,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3.5,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
  components: { VueSlickCarousel },
};
</script>
