<template>
  <v-container class="home">
    <!-- slider top -->
    <v-container>
      <v-row class="ma-0" justify="center" align="center">
        <v-col class="pa-0" cols="12" sm="12">
          <CarouselSimple />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="ma-0 mt-16 mb-16 pb-16" justify="center" align="center">
        <v-col class="pa-0" cols="12" sm="12">
          <CarouselProductOne/>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="ma-0 mt-16 mb-16 pb-16" justify="center" align="center">
        <v-col class="pa-0" cols="12" sm="12">
          <CarouselProductTwo/>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  created() {
    // console.log(localStorage.getItem('activeIcon'));
  }
}
</script>
