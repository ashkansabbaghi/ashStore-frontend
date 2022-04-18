<template>
    <v-container>
        <v-row>
            <v-app-bar class="header-custom mt-15 rounded-pill" fixed>
                <!-- <div class="bg"></div> -->
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

                <!-- <v-toolbar-title>Title</v-toolbar-title> -->
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <h6 @click="toggleSearch = false" v-if="toggleSearch" class="search">search in<strong
                        class="bold-search">ASHSTORE</strong></h6>
                <input class="input-custom" v-else />
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>
        </v-row>
    </v-container>
</template>

<script>
export default {

    data: () => ({
        toggleSearch: true
    })

}
</script>
