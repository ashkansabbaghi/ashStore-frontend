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
      slidesToShow: 2.5,
      slidesToScroll: 1,
      dots: false,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.2,
            // slidesToScroll: 1,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1.8,
            // slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
  components: { VueSlickCarousel },
};
</script>
