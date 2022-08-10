<template>
  <!-- modal -->
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="txt-btn"
          color="transparent"
          elevation="0"
          rounded
          v-bind="attrs"
          v-on="on"
        >
          {{ title }}
        </v-btn>
      </template>

      <!-- show modal -->
      <v-card>
        <v-card-title class="modal-title">
          <span class="text-h5">{{ title }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <!-- country -->
              <v-col class="pt-0 pb-0" cols="12" sm="12" md="12">
                <v-text-field
                  v-model="country"
                  label="country"
                  :value="country"
                  persistent-hint
                  required
                  readonly
                  single-line
                ></v-text-field>
              </v-col>
              <!-- end country -->

              <!-- state -->

              <v-col class="pt-0 pb-0" cols="12" sm="12">
                <v-autocomplete
                  :items="item_state"
                 v-model="state"
                  label="Select your state"
                  single-line
                  required
                ></v-autocomplete>
              </v-col>

              <!-- end state -->

              <!-- city -->
              <v-col class="pt-0 pb-0" cols="12" sm="12" md="12">
                <v-text-field
                  v-model="city"
                  label="your city"
                  persistent-hint
                  single-line
                  required
                ></v-text-field>
              </v-col>
              <!-- end city -->

              <!-- address -->
              <v-col class="pt-0 pb-0" cols="12" sm="12" md="12">
                <v-textarea
                  v-model="address"
                  clearable
                  label="St. NO code ..."
                  rows="2"
                ></v-textarea>
              </v-col>
              <!-- end address -->
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data: () => ({
    country: "iran",
    item_state: ["alborz", "tehran", "mashhad", "esfahan"],
    state:"",
    city: "",
    address: "",
    dialog: false,
  }),
};
</script>

<style>
</style>