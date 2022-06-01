<template>
  <v-footer class="footer-custom footer-btn" fixed>
    <!-- <div class="bg"></div> -->

    <!-- home -->
    <!-- <NuxtLink to="/">
            <v-btn icon v-ripple="{ class: `primary--text` }">
                <svg class="svg" width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.5696 9.34839L12.0455 0.82869L11.4741 0.257328C11.3439 0.128002 11.1679 0.0554199 10.9844 0.0554199C10.8009 0.0554199 10.6248 0.128002 10.4946 0.257328L1.39917 9.34839C1.26577 9.48127 1.16035 9.63952 1.08912 9.81381C1.01789 9.9881 0.982291 10.1749 0.984436 10.3632C0.99326 11.1397 1.63963 11.7596 2.41615 11.7596H3.35372V18.9446H18.6151V11.7596H19.5725C19.9497 11.7596 20.3049 11.6118 20.5718 11.3449C20.7032 11.2138 20.8074 11.0581 20.8782 10.8865C20.949 10.715 20.9851 10.5311 20.9843 10.3455C20.9843 9.97049 20.8365 9.61532 20.5696 9.34839V9.34839ZM12.2198 17.3563H9.74901V12.856H12.2198V17.3563ZM17.0267 10.1712V17.3563H13.6316V12.3265C13.6316 11.839 13.2367 11.4441 12.7492 11.4441H9.21956C8.73202 11.4441 8.33714 11.839 8.33714 12.3265V17.3563H4.94206V10.1712H2.82427L10.9866 2.01554L11.4962 2.52513L19.1467 10.1712H17.0267Z" />
                </svg>
            </v-btn>
        </NuxtLink> -->

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
    // padless: true,
    aIcon: "",
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
