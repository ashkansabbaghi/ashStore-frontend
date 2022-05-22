<template>
  <v-container class="home">
    <!-- slider top -->
    <v-row class="ma-0" justify="center" align="center">
      <v-col class="pa-0" cols="12" sm="12">
        <SliderTimerHeader />
      </v-col>
    </v-row>
    <v-row class="ma-0 mt-16 mb-16 pb-16" justify="center" align="center">
      <v-col class="pa-0" cols="12" sm="12">
        <SliderSmall />
      </v-col>
    </v-row>
    <v-row class="ma-0 mt-16 mb-16 pb-16" justify="center" align="center">
      <v-col class="pa-0" cols="12" sm="12">
        <SliderNormal />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
