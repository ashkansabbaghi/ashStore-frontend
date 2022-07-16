<template>
  <v-item-group mandatory active-class="primary">
    <div class="category">
      <v-row class="ma-0">
        <!-- header -->
        <v-col cols="12 pa-0">
          <v-card class="header d-flex align-center">
            <div class="text-h5 flex-grow-1 text-center">discount products</div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="ma-0 mt-8 mb-16 pb-5">
        <!-- categories -->
        <v-col v-for="n in 9" :key="n" cols="6" md="3" sm="4">
          <v-item v-slot="{ active, toggle }">
            <v-card class="item d-flex align-center" @click="toggle">
              <div v-if="!active" class="txt text-h6 flex-grow-1 text-center">
                category{{ n }}
              </div>
              <div v-if="active" class="active-txt flex-grow-1 text-center">
                <NuxtLink class="click-product" to="/products"></NuxtLink>
                <div class="">category{{ n }}</div>
                <div class="anim-click"></div>
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </div>
  </v-item-group>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "category",

  data: () => ({
    catId: "6262673b95a1856b75e8b353",
    arr: ["ashkan", "ali", "fati"],
  }),
  computed: {
    ...mapGetters("product", ["gProductsCat"]),
  },

  methods: {
    testMethodSet() {
      const setArr = new Set(this.arr);
      setArr.add("shagha");
      setArr.delete("ashkan");
      console.log(setArr);
    },
   async clickT() {
      setTimeout( () => console.log("test click"), 500);
    },
    ...mapActions("product", ["getProductOfCategory"]),
  },
  created() {
    this.testMethodSet();
  },
  async fetch() {
    // await this.getProductOfCategory(this.catId);
    // const promises = [await this.getProductOfCategory(this.catId)];
    // await Promise.all(promises);
  },
};
</script>
