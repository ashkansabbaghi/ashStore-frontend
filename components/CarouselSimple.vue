<template>
  <v-sheet background="transparent">
    <v-slide-group
      v-model="model"
      class="slide-group-custom"
      center-active
      hide-delimiter-background
      show-arrows-on-hover
      :show-arrows="false"
    >
      <v-slide-item v-for="i in 6" :key="i">
        <v-card class="card-slid-custom" max-width="300" @click="test">
          <img class="img-custom" src="@/static/img/img-4.jpg" />
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    model: null,
  }),
  methods: {
    test: () => {
      console.log("test clickItem");
    },
  },
};
</script>
