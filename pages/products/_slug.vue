<template>
  <div class="product">
    <v-carousel
      class="carousel-product"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="auto"
      v-if="images.length >= 1"
    >
      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-sheet class="bg-none" height="100%">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <img
              :src="image.src"
              :lazy-src="require('@/static/svg/logo_and_text.svg')"
              width="100%"
              height="auto"
              class=""
            />
            <!-- </img> -->
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card :loading="loading" class="ma-0 product-card">
      <div class="line-top"></div>
      <v-avatar class="product-dic" size="48" color="red">
        <span class="white--text caption">%25</span>
      </v-avatar>

      <div class=""></div>

      <v-card-text class="pa-10-20">
        <div class="txt-cat">Category</div>
      </v-card-text>

      <v-card-title class="pa-10-20"
        >product name parent model 265
      </v-card-title>

      <v-card-text class="pa-10-20">
        <v-row align="center" class="flex-nowrap mx-0">
          <v-rating
            :value="0"
            background-color="#DA8907"
            length="1"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="txt-black ms-4">
            4.5 <span class="grey--text">(413)</span>
          </div>

          <div class="txt-second ms-4">
            comments <strong class="pl-1">(223)</strong>
          </div>

          <v-btn-toggle class="ml-auto" v-model="toggle_exclusive" rounded>
            <v-btn  x-small color="#0687AF">
              <v-icon color="#fff">mdi-minus</v-icon>
            </v-btn>
            <v-btn x-small> 1 </v-btn>
            <v-btn  x-small color="#0687AF">
              <v-icon color="#fff">mdi-plus</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-row>
        <!-- description -->
        <div class="mt-7 product-description">
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>
    </v-card>
    <v-timeline align-top dense class="py-0 pr-7">
      <!-- color -->
      <v-timeline-item color="teal lighten-3" small>
        <v-row>
          <v-col cols="3" class="px-s-res">
            <strong class="txt-timeline">color</strong>
          </v-col>
          <v-col class="px-s-res">
            <v-item-group class="v-item-group-color" mandatory>
              <div class="pa-2" v-for="n in color" :key="n">
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    height="25"
                    width="25"
                    class="item d-flex align-center"
                    @click="toggle"
                    :color="n"
                  >
                    <div
                      color="red"
                      v-if="active"
                      class="active-txt flex-grow-1 text-center"
                    >
                      <v-icon elevation="3" class="" color="black"
                        >mdi-check</v-icon
                      >
                    </div>
                  </v-card>
                </v-item>
              </div>
            </v-item-group>
          </v-col>
        </v-row>
      </v-timeline-item>

      <!-- property -->
      <v-timeline-item color="pink" small>
        <v-row>
          <v-col cols="3" class="px-s-res">
            <strong class="txt-timeline">property</strong>
          </v-col>
          <v-col class="list-property px-s-res" :class="{ open: isOpen }">
            <v-icon class="more" @click="funcOpen()"
              >mdi-dots-horizontal</v-icon
            >
            <div class="bg-property"></div>
            <div v-for="(v, k, i) in property" :key="i">
              <span class="text-caption mb-2 mr-2">{{ k }}</span>
              <strong class="text-caption font-weight-bold">{{ v }}</strong>
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>

      <!-- seller -->
      <v-timeline-item class="mb-16 pb-10" color="pink" small>
        <v-row>
          <v-col class="px-s-res" cols="3">
            <strong class="txt-timeline">seller</strong>
          </v-col>
          <v-col class="seller px-s-res">
            <strong class="text-uppercase">ASHSTORE</strong>
            <span class="status text-uppercase">veryGood</span>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>


<script>
export default {
  layout: "product",
  data: () => ({
    color: ["red", "green", "blue"],
    property: {
      "key 1": "property 1",
      "key 2": "property 2",
      "key 3": "property 3",
      "key 4": "property 4",
      "key 5": "property 5",
      "key 6": "property 6",
      "key 7": "property 7",
    },
    isOpen: false,
    row: null,
    toggle_exclusive: undefined,
    loading: false,
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
      console.log("reserve");
      // this.loading = true;
      // setTimeout(() => (this.loading = false), 2000);
    },
    funcOpen() {
      console.log("funcOpen");
      this.isOpen = true;
    },
  },
};
</script>