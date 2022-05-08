<template>
    <v-app-bar class="header-custom header-profile" fixed>
        <!-- back -->
        <template >
            <!-- btn back -->
            <v-btn @click="goBack()" icon v-ripple="{ class: `primary--text` }">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <!-- more -->
            <v-bottom-sheet v-model="sheet" >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-show="toggleSearch" icon v-ripple="{ class: `primary--text` }" v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-sheet class="text-center" min-height="100px">
                    <v-card class="mx-auto" height="100%" max-height="200px"  tile>
                        <v-list flat>
                            <v-list-item-group v-model="selectItem" color="primary">
                                <v-list-item v-for="(item, i) in 2" :key="i.length">
                                    <v-list-item-content>
                                        <v-list-item-title class="pa-2" >item</v-list-item-title>
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
        selectItem: '',
        toggleSearch: true,
        sheet: false,
    }),
    computed: {
        ...mapGetters('core', ['isBack', 'activeIcon'])
    },
    methods: {
        goBack() {
            this.$store.commit('core/notBack')
            this.$router.go(-1)
        }
    }

}
</script>
