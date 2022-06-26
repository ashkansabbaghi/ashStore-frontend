<template>
  <v-chip-group
    class="item-txt"
    v-model="selection"
    active-class="active"
    column
  >
    <v-chip v-for="(w, i) in words" :key="i">{{ w }}</v-chip>
  </v-chip-group>
</template>
<script>
export default {
  props: ["words"],
  data: () => ({
    selection: 0,
  }),
  methods: {},
};
</script>