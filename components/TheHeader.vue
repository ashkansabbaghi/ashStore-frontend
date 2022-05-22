<template>
  <v-app-bar class="header-custom" fixed>
    <!-- search -->
    <template>
      <!-- btn search -->
      <v-btn @click="focusInput()" icon v-ripple="{ class: `primary--text` }">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!-- text search -->
      <h6 v-show="toggleSearch" @click="focusInput()" class="search">
        search in
        <strong class="bold-search">ASHSTORE</strong>
      </h6>

      <!-- input search -->
      <input
        v-show="!toggleSearch"
        ref="search"
        id="search"
        class="input-custom"
        autofocus
      />

      <v-spacer></v-spacer>

      <v-btn
        v-show="!toggleSearch"
        icon
        @click="toggleSearch = true"
        v-ripple="{ class: `primary--text` }"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <!-- more -->
      <v-btn v-show="toggleSearch" icon v-ripple="{ class: `primary--text` }">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({
    selectItem: "",
    toggleSearch: true,
    sheet: false,
  }),
  computed: {
    // ...mapGetters("core", ["isBack", "activeIcon"]),
  },
  methods: {
    ...mapMutations({}),
    focusInput() {
      console.log("focus");
      this.toggleSearch = false;
      setTimeout(() => document.getElementById("search").focus(), 200);
    },
  },
};
</script>
