<template>
  <v-container class="blog">
    <v-row class="ma-0" justify="center" align="center">
      <v-col class="pa-0" cols="12" sm="12">
        <SkeletonLoader v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">error</p>
        <Blog
          v-else
          v-for="blog in gBlogs"
          :key="blog.id"
          :blog="blog"
          :categories="gCats"
          :more="true"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "blog",
  name: "blog",
  data: () => ({
    blogs: {},

  }),
  computed: {
    ...mapGetters("blog", ["gBlogs", "gCats"]),
  },
  created() {
    this.$store.commit("core/notBack");
    // this.$vuetify.rtl = true;
  },
  methods: {
    ...mapActions("blog", ["getBlogs", "getCategories"]),
  },
  async fetch() {
    // console.log(this.$route.name);

    const promises = [await this.getBlogs(), await this.getCategories()];
    await Promise.all(promises)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  },
};
</script>
