<template>
    <v-app-bar class="header-custom" fixed>
        <!-- search -->
        <template>
            <!-- btn search -->
            <v-btn icon v-ripple="{ class: `primary--text` }">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <!-- text search -->
            <h6 v-show="toggleSearch" @click="focusInput()" class="search">search in
                <strong class="bold-search">Blogs</strong>
            </h6>

            <!-- input search -->
            <input v-show="!toggleSearch" ref="search" id="search" class="input-custom" autofocus />

            <v-spacer></v-spacer>

            <v-btn v-show="!toggleSearch" icon @click="toggleSearch = true" v-ripple="{ class: `primary--text` }">
                <v-icon>mdi-close</v-icon>
            </v-btn>

            <!-- more -->
            <v-bottom-sheet v-model="selectMore">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-show="toggleSearch" icon v-ripple="{ class: `primary--text` }" v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-sheet class="text-center" min-height="100px">
                    <v-card class="mx-auto" height="100%" max-height="200px" tile>
                        <v-list flat>
                            <v-list-item-group color="primary">
                                <v-list-item v-for="(item, i) in itemMore" :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title class="pa-2" @click="clickItem()" v-text="item.title">
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-sheet>
            </v-bottom-sheet>
        </template>
    </v-app-bar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    data: () => ({
        toggleSearch: true,
        selectMore: 0,
        selectItem: 0,
        itemMore: [
            {
                icon: '',
                title: 'create blog',
                link: 'blogs/create'
            },
            {
                icon: '',
                title: 'about',
                link: 'blogs/about'
            },
        ]
    }),
    computed: {
    },
    methods: {
        focusInput() {
            this.toggleSearch = false
            setTimeout(() => document.getElementById("search").focus(), 200);
        },
        clickItem() {
            // console.log("click item");
            this.$router.push('blogs/create')
        }
    }

}
</script>
