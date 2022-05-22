<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-card class="cart-blog mx-auto mt-10">
      <!--  user in list blog -->
      <template v-if="more">
        <template v-if="findUser(blog.author)">
          <span
            class="font-weight-bold text-lowercase username"
            v-text="user"
          ></span>
        </template>
        <template v-else>
          <span class="font-weight-bold text-lowercase username"
            >not found user</span
          >
        </template>
      </template>

      <!-- slider image post -->
      <v-carousel
        class="carousel-blog"
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="70vh"
        v-if="images.length >= 1"
      >
        <v-carousel-item v-for="(image, i) in images" :key="i">
          <v-sheet class="bg-none" height="100%">
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-img
                :src="setImage(image)"
                :lazy-src="require('@/static/svg/logo_and_text.svg')"
                width="auto"
                height="100%"
                contain
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
            class="title-blog txt-black mb-5 mt-5 dir-rtl"
            v-html="blog.title.rendered"
          ></h5>
          <p
            class="text-blog txt-black dir-rtl"
            :class="{ txt_overflow_line_2: more }"
            v-html="content"
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
          <div class="d-flex justify-space-between pt-7 mb-6 footer-blog">
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
  props: ["blog", "more", "categories", "users"],
  data: () => ({
    model: null,
    blg: {},
    images: [],
    content: "",
    category: "",
    user: "",
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
      const cats = this.categories.find((cat) => cat.id == c);
      this.category = cats.name;
      return true;
    },
    findUser(c) {
      // console.log(c);
      // console.log(this.users);
      const user = this.users.find((u) => u.id == c);
      this.user = user.name;
      return true;
    },
    separator() {
      let m;
      console.log(this.blog);
      const info = this.blog.content.rendered;
      let rex = /<img[^>]+src="http:\/\/([^">]+)/g;
      let rexTagImg = /<img[^>]*\/?>/g;
      while ((m = rex.exec(info))) {
        this.images.push(m[1]);
      }
      this.content = info.replace(rexTagImg, " ");
    },
    setImage: (img) => {
      let newImg = `http://${img}`;
      return newImg;
    },
  },
  async fetch() {
    this.separator();
  },
};
</script>
