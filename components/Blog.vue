<template>
    <v-card class="cart-blog mx-auto mt-10" max-width="90%">
        <div class="font-weight-bold text-lowercase username">
            ashiTech
        </div>

        <!-- slider post -->
        <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus"
            height="400">
            <v-carousel-item v-for="(slide, i) in 6" :key="i">
                <v-sheet class="bg-none " height="100%">
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-img :src="require('@/static/img/img-1.jpg')" height="100%" cover class="border-radius-20">
                        </v-img>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <!-- avatar -->
        <v-list-item-avatar class="avatar-blog" size="60">
            <img src="@/static/img/img-2.jpg" alt="">
        </v-list-item-avatar>

        <!-- info blog -->
        <v-list-item class="pa-4 mb-16" three-line>
            <v-list-item-content class="info-blog pa-0">
                <h5 class="text-h5 font-weight-black txt-black mb-5 mt-4">
                    Title for one blog in design system and blog about and continue
                </h5>
                <p class="text-blog txt-black">It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                    still in their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose`
                </p>
                <div class="d-flex justify-space-between pt-7 mb-6">
                    <span class="txt-gray">2022/05/21</span>
                    <span class="txt-gray">category blog</span>
                </div>
            </v-list-item-content>


        </v-list-item>

    </v-card>
</template>
<script>
export default {
    data: () => ({
        model: null
    }),
    methods: {}
}
</script>