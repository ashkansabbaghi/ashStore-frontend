<template>
  <v-app>
    <AppMenuTop />
    <!-- <v-sheet id="scrolling-techniques-7" class="overflow-y-auto"> -->
      <v-container style="height: 1500px;">
        <Nuxt />
      </v-container>
    <!-- </v-sheet> -->
    <AppFooter />
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
