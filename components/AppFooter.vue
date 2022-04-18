<template>
    <v-card>
        <v-footer fixed :padless="padless">
            <v-card flat tile width="100%" class="lighten-1 text-center">
                <v-card-text>
                    <v-btn class="mx-4" icon>
                        <v-icon v-for="icon of icons" :key="icon" size="24px">
                            {icons}
                        </v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-home',
            'mdi-email',
            'mdi-calendar',
            'mdi-delete',
        ],
        padless: true
    }),
    computed: {

    },
}
</script>
