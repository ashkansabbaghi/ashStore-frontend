<template>
  <v-app class="bg-light">
    <div class="container-main">
      <TheHeaderBlogs />

      <Nuxt keep-alive />

      <FadeContentBottom />
      <TheFooter />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {};
  },
}
</script>
