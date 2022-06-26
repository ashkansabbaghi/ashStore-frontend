<template>
  <v-container class="cart">
    <v-row class="justify-center ma-0">
      <v-col class="pa-0" cols="12" sm="12">
        <v-stepper v-model="e1" alt-labels class="stepper">
          <v-stepper-header>
            <v-stepper-step
              v-ripple="false"
              :complete="e1 > 1"
              :editable="e1 > 1 ? false : true"
              class="px-0"
              step="1"
            >
              CART
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              v-ripple="false"
              :complete="e1 > 2"
              :editable="e1 > 2 ? false : true"
              class="px-0"
              step="2"
            >
              DISTRIBUTION
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              v-ripple="false"
              :complete="e1 > 3"
              editable
              class="px-0"
              step="3"
            >
              PAYMENT
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content class="cart-step-1 pa-0 mb-16" step="1">
              <CartProducts v-if="items.length > 0" :items="items" />
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-btn color="primary" @click="e1 = 3"> Continue 2 </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-btn color="primary" @click="e1 = 1"> Continue 3 </v-btn>
              <v-btn @click="e1 = 2"> back </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "Cart",
  data: () => ({
    e1: 1,
    steps: 2,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Product name parent model 265 ",
        color: { code: "red", name: "red" },
        store: "ashStooore",
        unit: 3,
        price: 25.66,
      },
      {
        discount: 3,
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Product name parent model 265 ",
        color: { code: "blue", name: "blue" },
        store: "ashitech",
        unit: 3,
        price: 13,
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Product name parent model 265 ",
        color: { code: "yellow", name: "yellow" },
        store: "ashStooore",
        unit: 3,
        price: 15.6,
      },
    ],
  }),
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },
  methods: {
    nextStep(n) {
      console.log("next step");
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
};
</script>
