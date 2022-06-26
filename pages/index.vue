<template>
  <div class="home">
    <SkeletonBlog v-if="$fetchState.pending" />
    <NotConnection v-else-if="$fetchState.error" />
    <v-container v-else>
      <!-- slider top -->

      <v-row class="ma-0" justify="center" align="center">
        <v-col class="pa-0" cols="12" sm="12">
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            min-height="200"
            transition="fade-transition"
          >
            <SliderTimerHeader />
          </v-lazy>
        </v-col>
      </v-row>

      <!-- slider small -->
      <v-row class="ma-0 mt-16 mb-16 pb-16" justify="center" align="center">
        <v-col class="pa-0" cols="12" sm="12">
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            min-height="200"
            transition="fade-transition"
          >
            <SliderSmall />
          </v-lazy>
        </v-col>
      </v-row>

      <!-- slider normal -->
      <v-row class="ma-0 mt-16 mb-16 pb-16" justify="center" align="center">
        <v-col class="pa-0" cols="12" sm="12">
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            min-height="200"
            transition="fade-transition"
          >
            <SliderNormal />
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  data: () => ({
    isActive: false,
  }),
  methods: {
    ...mapActions("blog", ["getBlogs", "getCategories", "getUsers"]),
  },
  async fetch() {
    const promises = [
      await this.getBlogs(),
      await this.getCategories(),
      await this.getUsers(),
    ];
    await Promise.all(promises)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  },
  fetchKey: "site-sidebar",
};
</script>