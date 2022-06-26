<template>
  <v-list class="list-pro">
    <v-list-item class="item-list-pro" v-for="(item, i) in items" :key="i">
      <v-lazy
        class="w-100"
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        transition="fade-transition"
      >
        <v-card
          :ripple="false"
          class="cart-products pb-7"
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
          <v-divider  v-else color="#D3D3D3"></v-divider>

          <div class="mt-7 d-flex flex-no-wrap justify-end flex-row-reverse">
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
              <v-card-actions class="pa-0 pt-2 font-weight-black card-option">
                <span
                  v-if="item.discount"
                  class="txt-gray txt-font-small text-decoration-line-through"
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
      </v-lazy>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["items"],
  data: () => ({
    loading: false,
    isActive: false,
  }),
  computed: {
    ...mapGetters("core", ["isBack"]),
  },
  methods: {
    setImage: (img) => {
      let newImg = `http://${img}`;
      return newImg;
    },
  },
  async fetch() {},
};
</script>
