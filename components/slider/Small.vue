<template>
  <div>
    <h3 class="title-carousel">HOT PRODUCT</h3>
    <SlotCarouselSm>
      <div class="slide-group-custom pr-6 pl-6" v-for="i in 6" :key="i">
        <v-card
          @click="product()"
          class="card-slid-custom mr-8"
          width="160px"
          height="150px"
        >
          <img
            class="img-custom"
            src="@/static/img/img-4.jpg"
            alt="product image"
          />
          <div class="card-info">
            <h4 class="txt-overflow txt-black">
              hot product name old and new face
            </h4>
            <p class="txt-overflow txt-gray">
              about product about product about product
            </p>
            <h4>$27.77</h4>
          </div>
        </v-card>
      </div>
    </SlotCarouselSm>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
  }),
  methods: {
    product(){
      this.$router.push("/products/slug");
    },
  },
};
</script>