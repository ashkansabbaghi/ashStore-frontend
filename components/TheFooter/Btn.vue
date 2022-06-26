<template>
  <v-footer class="footer-custom footer-btn" fixed>
    <v-btn class="btn">
      <v-row class="row-btn">
        <div>cart</div>
        <div>|</div>
        <div class="info-price">
          <div class="price-finally">$ 27.77</div>
          <div class="price-dis text-decoration-line-through">$ 30.5</div>
        </div>
      </v-row>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {},
  async created() {},
  methods: {
    clickBlog() {
      this.$store.commit("core/notBack");
    },
  },
};
</script>
