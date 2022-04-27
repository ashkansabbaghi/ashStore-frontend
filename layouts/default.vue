<template>
  <v-app class="bg-light">
    <div class="container-main">
      <TheMenuTop />

      <Nuxt />

      <TheFooter />
      <FadeContentBottom />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
}
</script>
