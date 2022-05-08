<template>
  <v-app class="bg-light">
    <div class="container-main">
      <TheHeaderChild />

      <Nuxt keep-alive/>

      <!-- <FadeContentBottom /> -->
      <!-- <TheFooter /> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: "child",
  data() {
    return {};
  },
}
</script>
