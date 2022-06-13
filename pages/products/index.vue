<template>
  <v-item-group mandatory active-class="primary">
    <div class="category">
      <v-col class="pa-0" cols="12" sm="12">
        <!-- <SkeletonBlog v-if="$fetchState.pending" /> -->
        <!-- <NotConnection v-else-if="$fetchState.error" /> -->
        <span>{{ gProductsCat }}</span>
        <span>{{ products }}</span>
      </v-col>
    </div>
  </v-item-group>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "default",

  data: () => ({
    catId: "6262673b95a1856b75e8b353",
    posts: [],
    products: [],
  }),
  computed: {
    ...mapGetters("product", ["gProductsCat"]),
  },
  methods: {
    ...mapActions("product", ["getProductOfCategory"]),
  },

  async created() {
    await this.getProductOfCategory(this.catId);
  },

  // async fetch() {
  //   const promises = [await this.getProductOfCategory(this.catId)];
  //   this.products = await Promise.all(promises);
  // },
  // async asyncData({ params }) {
  //   console.log(params);
  //   this.products = await this.getProductOfCategory("6262673b95a1856b75e8b353")
  //   return {test}
  // },
};
</script>