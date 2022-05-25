<template>
  <v-card :loading="loading" class="ma-0 product">
    <!-- <v-img
      height="70vh"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img> -->

    <v-carousel
      class="carousel-product"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="70vh"
      v-if="images.length >= 1"
    >
      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-sheet class="bg-none " height="100%">
          <v-row class="fill-height ma-0 " align="center" justify="center">
            <v-img
              :src="image.src"
              :lazy-src="require('@/static/svg/logo_and_text.svg')"
              width="auto"
              height="100%"
              class=""
            >
            </v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

</template>

<script>
export default {
  layout: "child",
  data: () => ({
    loading: true,
    selection: 1,
    images: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>