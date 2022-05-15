<template>
  <v-sheet class="not-bg">
    <h3 class="title-carousel">HOT PRODUCT</h3>
    <v-slide-group
      v-model="model"
      class="slide-group-custom"
      center-active
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-slide-item v-for="i in 6" :key="i">
        <v-card @click="test" class="card-slid-custom mr-8" max-width="150px" height="150px">
          <img class="img-custom" src="@/static/img/img-4.jpg" />
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
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    model: null,
  }),
  methods: {
      test: () => {
          console.log("test slider click");
      }
  },
};
</script>