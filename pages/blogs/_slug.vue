<template>
  <v-container class="blog">
    <v-row class="ma-0" justify="center" align="center">
      <v-col class="pa-0" cols="12" sm="12">
        <SkeletonLoader v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">error</p>
        <Blog
          v-else
          :blog="gBlog"
          :categories="gCats"
          :user="gUser"
          :more="false"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  layout: "child",
  data: () => ({
    blogs: [],
  }),
  computed: {
    ...mapGetters("blog", ["gBlog", "gCats", "gUser"]),
  },
  created() {
    this.$store.commit("core/setBack");
  },
  methods: {
    ...mapActions("blog", ["getBlog", "getCategories", "getUser"]),
  },

  async asyncData() {

  },
  async fetch() {
    // console.log(this.$route.params.slug); //27

    const promises = [
      await this.getBlog(this.$route.params.slug),
      await this.getCategories(),
      // await this.getUser(),
    ];
    await Promise.all(promises)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    // console.log(this.gBlog);

    await this.getUser(this.gBlog.author)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  },
};
</script>

<style>
</style>