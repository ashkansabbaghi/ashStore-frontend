<template>
  <v-container class="blog">
    <v-row class="ma-0" justify="center" align="center">
      <v-col class="pa-0" cols="12" sm="12">
        <SkeletonBlog v-if="$fetchState.pending" />
        <NotConnection v-else-if="$fetchState.error" />
        <Blogs
          v-else
          v-for="blog in gBlogs"
          :key="blog.id"
          :blog="blog"
          :categories="gCats"
          :users="gUsers"
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
    ...mapGetters("blog", ["gBlogs", "gCats", "gUsers"]),
  },
  created() {
    this.$store.commit("core/notBack");
    // this.$vuetify.rtl = true;
  },
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
};
</script>
