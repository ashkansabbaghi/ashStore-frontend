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
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 2.5,
      autoplay: true,
      autoplaySpeed: 4500,
      // pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
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
            slidesToShow: 0.98,
            // slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    },
  }),
  components: { VueSlickCarousel },
};
</script>
