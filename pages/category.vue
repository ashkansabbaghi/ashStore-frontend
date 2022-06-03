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
              <div
                v-if="active"
                @click="openProducts()"
                class="active-txt flex-grow-1 text-center"
              >
                <div class="">category{{ n }}</div>
                <div class="anim-click"> </div>
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </div>
  </v-item-group>
</template>

<script>
export default {
  name: "category",
  methods: {
    openProducts() {
      console.log("click category");
      this.$router.push("/products");
    },
  },
};
</script>
