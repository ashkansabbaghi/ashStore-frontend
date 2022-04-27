
<template>
    <v-sheet background="transparent">
        <v-slide-group v-model="model" class="slide-group-custom" center-active hide-delimiter-background
            :show-arrows="false">
            <v-slide-item v-for="i in slides" :key="i">
                <v-card class="card-slid-custom" max-width="300">
                    <img class="white--text img-custom"  src='@/static/img/img-4.jpg'/>
                        <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
                        <!-- <img src="/_nuxt/static/img/img-2.jpg" alt=""> -->

                </v-card>
            </v-slide-item>

        </v-slide-group>
    </v-sheet>
</template>
<script>
export default {
    data: () => ({
        slides: [
            'img-1',
            'img-2',
            'img-3',
            'img-4',
            'img-5',
        ],
        model: null

    }),
    methods: {

    }
}
</script>