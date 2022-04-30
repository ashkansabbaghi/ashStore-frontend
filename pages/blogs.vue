<template>
  <v-container class="blog">
    <v-row class="ma-0" justify="center" align="center">
      <v-col class="pa-0" cols="12" sm="12">
        <Blog v-for="i in 3" :key="i" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default { name: 'blog' }
</script>
