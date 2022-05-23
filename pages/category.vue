<template>
  <v-item-group mandatory active-class="primary">
    <div class="category mb-16">
      <v-row class="ma-0">
        <!-- header -->
        <v-col cols="12 pa-0">
          <v-card class="header d-flex align-center">
            <div class="text-h3 flex-grow-1 text-center">discount</div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="ma-0 mt-8">
        <!-- categories -->
        <v-col v-for="n in 9" :key="n" cols="4" md="4" sm="4">
          <v-item v-slot="{ active, toggle }">
            <v-card class="item d-flex align-center" @click="toggle">
              <div v-if="!active" class="txt text-h6 flex-grow-1 text-center">
                category{{n}}
              </div>
              <!-- <v-fade-transition> -->
              <div v-if="active" @click="openProduct" class="active-txt flex-grow-1 text-center">
                <div class="mb-1">category{{n}} </div>
                <p>click</p>
              </div>
              <!-- </v-fade-transition> -->
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
    openProduct(){
      console.log("click category");
    }
  }
};
</script>
