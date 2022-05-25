<template>
  <div>
  <!-- <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  > -->
    <h3 class="title-carousel pb-11">DISCOUNT PRODUCT</h3>
    <SlotCarouselNo>
      <div class="slide-group-custom pr-6 pl-6" v-for="i in 6" :key="i">
        <v-card
          @click="test"
          class="card-slid-custom mr-8"
          min-height="350px"
          width="320px"
        >
          <img class="img-custom two w-100" src="@/static/img/img-2.jpg" />
          <v-avatar class="avatar-custom" size="32" color="red">
            <span class="white--text caption">%25</span>
          </v-avatar>
          <div class="card-info-two">
            <v-card-title class="title txt-overflow display-block"
              >discount product name discount product name discount product
              name</v-card-title
            >
            <v-card-text class="content">
              <div class="txt-overflow-line-2">
                model caption discount product name and content product model
                caption discount product name and content product
              </div>
              <v-row align="center" class="mx-0 pt-4">
                <div class="">3.5 (15)</div>
                <v-rating
                  :value="3.5"
                  background-color="white"
                  color="yellow accent-4"
                  dense
                  half-increments
                  hover
                  size="12"
                  readonly
                ></v-rating>
              </v-row>

              <div class="my-4 text-subtitle-1">
                <span class="caption txt-gray">price</span>
                <span class="caption text-decoration-none txt-gray pl-2"
                  >$34.77</span
                >
                <strong class="text-right pl-2">$ 27.77</strong>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </div>
    </SlotCarouselNo>
  <!-- </v-lazy> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    isActive: false,
  }),
  methods: {
    test: () => {
      console.log("test clickItem");
    },
  },
};
</script>