<template>
  <div>
    <h3 class="title-carousel" v-if="title" v-text="title"></h3>
    <SlotCarouselSm>
      <div class="slide-group-custom" v-for="i in items" :key="i.id">
        <v-card
          @click="product(i.slug)"
          class="card-slid-custom card-small shadow-none mr-8"
        >
          <img
            class="img-custom img-small"
            src="@/static/img/img-4.jpg"
            alt="product image"
          />
          <div class="card-info">
            <h4 class="txt-overflow txt-black" v-text="i.name"></h4>
            <p class="txt-overflow txt-gray" v-if="!notDesc" v-text="i.caption"></p>
            <h4>$<span v-text="i.price"></span></h4>
          </div>
        </v-card>
      </div>
    </SlotCarouselSm>
  </div>
</template>
<script>
export default {
  props: ["title", "items","notDesc"],
  data: () => ({
    model: null,
  }),
  methods: {
    product(slug) {
      console.log(slug);
      this.$router.push(`/products/${slug}`);
    },
  },
};
</script>