<template>
  <v-container class="products pa-0">
    <v-row class="justify-center ma-0">
      <v-col class="pa-0" cols="12" sm="12">
        <!-- <SkeletonBlog v-if="$fetchState.pending" /> -->
        <!-- <NotConnection v-else-if="$fetchState.error" /> -->
        <!-- <div v-for="(pro, i) in gProductsCat" :key="i">
          <span>product({{i}}) : {{ pro._id }}</span><br>
          <span v-for="(img, j) in pro.image" :key="j">
            <span>{{img.image.data}}</span>
            <img width="100px" height="auto" :src="setImage(img.image.data)" alt="" />
          </span>
        </div> -->

        <SliderSection v-if="words" :words="words" :selection="selection" />
        <Products v-if="items.length > 1" :items="items" />
        <!-- <v-list class="list-pro">
          <v-list-item
            class="item-list-pro"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-card
              :ripple="false"
              @click="openProduct()"
              class="cart-products pb-8"
              width="100%"
              color="transparent"
              elevation="0"
            >
              <template v-if="item.discount">
                <v-divider color="#F02D46"></v-divider>
                <v-avatar class="product-dic" size="48" color="red">
                  <span class="white--text caption">%25</span>
                </v-avatar>
              </template>
              <v-divider v-else color="#D3D3D3"></v-divider>

              <div
                class="mt-7 d-flex flex-no-wrap justify-end flex-row-reverse"
              >
                <div class="info-pro">
                  <v-card-title
                    single-line
                    hide-details
                    class="title-pro txt-black"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle
                    class="sub-pro txt-gray"
                    v-text="item.desc"
                  ></v-card-subtitle>

                  <v-row align="center" class="flex-nowrap mx-0 pt-3">
                    <v-rating
                      :value="0"
                      background-color="#DA8907"
                      length="1"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="txt-black ms-2 txt-font-small">
                      4.5 <span class="grey--text">(413)</span>
                    </div>
                  </v-row>
                  <v-card-actions
                    class="pa-0 pt-2 font-weight-black card-option"
                  >
                    <span
                      v-if="item.discount"
                      class="
                        txt-gray txt-font-small
                        text-decoration-line-through
                      "
                      >$24.55</span
                    >
                    <span class="txt-black txt-font-title">$24.55</span>
                  </v-card-actions>
                </div>
                <div class="side-img">
                  <v-img class="img-pro" :src="item.src"></v-img>
                  <template v-if="item.color">
                    <div class="group-color-pro">
                      <v-avatar
                        v-for="(c, i) in item.color"
                        :key="i"
                        size="5"
                        :color="c"
                        class="item-color"
                      ></v-avatar>
                    </div>
                  </template>
                </div>
              </div>
            </v-card>
          </v-list-item>
        </v-list> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "default",

  data: () => ({
    catId: "6262673b95a1856b75e8b353",
    posts: [],
    products: [],
    selection: 0,
    words: ["news", "lowest", "hottest", "discounted", "other"],
    items: [
      {
        color: ["#1F7087", "#952175", "#fff"],
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Product name parent model 265 ",
        desc: "description product model and price",
      },
      {
        color: ["#952175"],
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Product name parent model 265 ",
        desc: "description product model and price",
        discount: 25,
      },
      {
        color: ["#952175"],
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Product name parent model 265 ",
        desc: "description product model and price",
      },
    ],
  }),
  computed: {
    ...mapGetters("product", ["gProductsCat"]),
  },
  methods: {
    ...mapActions("product", ["getProductOfCategory"]),

    setImage: (img) => {
      let newImg = `http://localhost:8080/img/${img}`;
      return newImg;
    },

  },

  async created() {
    // await this.getProductOfCategory(this.catId);
  },

  async fetch() {
    const promises = [await this.getProductOfCategory(this.catId)];
    this.products = await Promise.all(promises);
  },
  // async asyncData({ params }) {
  //   console.log(params);
  //   this.products = await this.getProductOfCategory("6262673b95a1856b75e8b353")
  //   return {test}
  // },
};
</script>