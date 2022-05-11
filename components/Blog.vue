<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-card class="cart-blog mx-auto mt-10" max-width="90%">
      <div
        class="font-weight-bold text-lowercase username"
        v-text="blog.author"
      ></div>
      <!-- slider image post -->
      <v-carousel
        class="carousel-blog"
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="400"
      >
        <v-carousel-item v-for="(slide, i) in 6" :key="i">
          <v-sheet class="bg-none" height="100%">
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-img
                :src="require('@/static/img/img-1.jpg')"
                height="100%"
                cover
                class="border-radius-20"
              >
              </v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <!-- avatar -->
      <v-list-item-avatar class="avatar-blog" size="60">
        <img src="@/static/img/avatar_1.png" alt="" />
      </v-list-item-avatar>

      <!-- info blog -->
      <v-list-item class="pa-4 mb-16" three-line>
        <v-list-item-content class="info-blog pa-0">
          <h5
            class="text-h5 font-weight-black txt-black mb-5 mt-4"
            v-html="blog.title.rendered"
          ></h5>
          <p
            class="text-blog txt-black"
            :class="{ txt_overflow_line_2: more }"
            v-html="blog.content.rendered"
          ></p>
          <v-btn
            rounded
            elevation="0"
            class="mt-3"
            v-if="more"
            @click="clickMore()"
            >more
          </v-btn>
          <!-- update seller and admin -->
          <v-btn
            rounded
            elevation="0"
            class="mt-3"
            v-if="!more"
            @click="clickUpdateBlog()"
            >update blog
          </v-btn>
          <div class="d-flex justify-space-between pt-7 mb-6">
            <span class="txt-gray" v-text="blog.date"></span>
            <div v-for="(c, i) in blog.categories" :key="i">
              <template v-if="findCat(c)">
                <span class="txt-gray" v-text="category"></span>
              </template>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-lazy>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  props: ["blog", "more", "categories"],
  data: () => ({
    model: null,
    blg: {},
    category: "",
    loading: false,
    isActive: false,
  }),
  computed: {
    ...mapGetters("core", ["isBack"]),
  },
  methods: {
    clickMore() {
      this.$store.commit("core/setBack");
      this.$router.push(`/blogs/${this.blog.id}`);
    },
    clickUpdateBlog() {
      console.log("update blog");
    },
    findCat(c) {
    //   console.log("find cat ", c, this.category);
      const cats = this.categories.find((cat) => cat.id == c);
    //   console.log(cats);
      this.category = cats.name;
      return true;
    },
  },
  async fetch() {},
};
</script>