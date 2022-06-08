<template>
  <SlotCarouselTimer>
    <div v-for="(v,i) in imgs" :key="i" max-width="400px">
      <v-card class="card-slid-custom shadow-none" @click="test">
        <img class="img-custom w-100" :src="require(`@/static/img/${v.url}`)" />
      </v-card>
    </div>
  </SlotCarouselTimer>
</template>


<script>
export default {
  data: () => ({
    model: null,
    imgs: [
      { url: "img-h-1.png", alt: "image-header" },
      { url: "img-h-2.png", alt: "image-header" },
      { url: "img-h-3.png", alt: "image-header" },
    ],
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
  // computed: {
  //      getImage(imageURL){
  //           return require(imageURL);
  //       }
  // },
  methods: {
    test: () => {
      console.log("test clickItem");
    },
    // getImage(imageURL) {
    //    require(imageURL);
    // },
  },
};
</script>
