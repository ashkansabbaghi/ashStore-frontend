<template>
  <v-footer class="footer-custom footer-btn" fixed>
    <v-btn
      class="btn"
      :loading="loading"
      @click="$emit('click-cart', step)"
    >
      <v-row class="row-btn">
        <div v-if="txt" v-text="txt"></div>
        <div>|</div>
        <div class="info-price">
          <div class="price-finally">
            $ <span v-if="payment" v-text="payment"></span>
          </div>
          <div class="price-dis text-decoration-line-through" v-if="pay_disc">
            $ <span v-text="pay_disc"></span>
          </div>
        </div>
      </v-row>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  props: ["txt", "payment", "pay_disc", "loading", "step"],
  data: () => ({}),
  computed: {},
  async created() {},
  methods: {
    clickBlog() {
      this.$store.commit("core/notBack");
    },
  },
};
</script>
