<template>
  <v-app class="bg-light">
    <div class="container-main">
      <AppMenuTop />
      <Nuxt />
      <AppFooter />
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
