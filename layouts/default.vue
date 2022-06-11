<template>
  <v-app class="bg-light">
    <div class="container-main">
      <TheHeaderSearch />

      <Nuxt keep-alive/>

      <TheFooterFadeBottom />
      <TheFooter />
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
