<template>
    <v-card class="cart-blog mx-auto mt-10" max-width="90%">
        <div class="font-weight-bold text-lowercase username" v-text="blg.auth"> </div>

        <!-- slider post -->
        <v-carousel class="carousel-blog" :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus"
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
                <h5 class="text-h5 font-weight-black txt-black mb-5 mt-4" v-text="blg.title"> </h5>
                <p class="text-blog txt-black " :class="{ txt_overflow_line_2: more }" v-text="blg.content">
                </p>
                <v-btn rounded elevation="0" class="mt-3" v-if="more" @click="$router.push(`/blogs/${blog.slug}`)">more
                </v-btn>
                <div class="d-flex justify-space-between pt-7 mb-6">
                    <span class="txt-gray" v-text="blg.publishDate"></span>
                    <span class="txt-gray" v-text="blg.category"></span>
                </div>
            </v-list-item-content>
        </v-list-item>

    </v-card>
</template>


<script>
import { mapGetters } from "vuex";
export default {
    props: ['blog', 'more'],
    data: () => ({
        model: null,
        blg: {}
    }),
    computed: {
        ...mapGetters('core', ['isBack'])
    },
    created() {
        this.blg = this.blog
        this.blg.isActive = false;
    },
    methods: {}
}
</script>