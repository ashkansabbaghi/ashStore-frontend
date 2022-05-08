<template>
    <v-container class="blog">
        <v-row class="ma-0" justify="center" align="center">
            <v-col class="pa-0" cols="12" sm="12">
                <SkeletonLoader v-if="$fetchState.pending" />
                <p v-else-if="$fetchState.error">error</p>
                <Blog v-else :blog="blog" :more="false" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions , mapGetters } from "vuex";

export default {
    layout: 'child',
    data: () => ({
        blogs: [],
        blog: {
            id: "1",
            slug: "title-for-one-blog",
            auth: "ashStore",
            title: ' Title for (one) blog in design system and blog about and continue',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare egestas libero et pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus eleifend urna nec pretium semper. In aliquet, massa sit amet vehicula porta, sem purus sollicitudin lacus, quis vehicula enim sem vel tortor. In diam nunc, ultrices vitae laoreet vitae, varius quis nunc. Fusce dui mi, imperdiet eu ullamcorper sit amet, facilisis ut lacus. Nulla nec dictum diam. Sed nec mauris eu mi tincidunt maximus ac ut dui. Aliquam vel vulputate ante. Vestibulum euismod placerat sem, lacinia gravida lacus facilisis vel. Proin porta magna pellentesque, porttitor tortor quis, feugiat nisl. Donec sem enim, tristique sit amet gravida sit amet, bibendum in ligula. Proin semper laoreet nulla nec pulvinar',
            category: "category one",
            publishDate: "2022/05/21",
            image: []
        }
    }),
     computed: {
    ...mapGetters('blog' , ['gBlogs'])
  },
    created() {
        this.$store.commit('core/setBack')
    },
    methods: {
    ...mapActions('blog', ['getBlogs']),

        // async setBlog() {
        //     return await fetch("https://api.nuxtjs.dev/mountains").then(res => res.json());
        // }
    },
    async fetch() {
        this.blogs = await this.getBlogs();
    },
}
</script>

<style>
</style>