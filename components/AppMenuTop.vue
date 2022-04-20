<template>
    <v-app-bar class="header-custom" fixed>

        <!-- search -->
        <v-btn icon v-ripple="{ class: `primary--text` }">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <h6 v-show="toggleSearch" @click="focusInput()" class="search">search in
            <strong class="bold-search">ASHSTORE</strong>
        </h6>

        <!-- active search -->
        <input v-show="!toggleSearch" ref="search" id="search" class="input-custom" autofocus />

        <v-spacer></v-spacer>

        <v-btn v-show="!toggleSearch" icon @click="toggleSearch = true" v-ripple="{ class: `primary--text` }">
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn icon v-ripple="{ class: `primary--text` }">
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {

    data: () => ({
        toggleSearch: true
    }),
    methods: {
        focusInput() {
            console.log("focus");
            this.toggleSearch = false
            setTimeout(() => document.getElementById("search").focus(), 200);
        }
    }

}
</script>
