<template>
  <v-app class="bg-light">
    <div class="container-main">
      <TheHeaderFadeTop />
      <TheHeaderCart />

      <Nuxt keep-alive />
      <!-- footer in page cart  -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: "child",
  data() {
    return {};
  },
};
</script>
