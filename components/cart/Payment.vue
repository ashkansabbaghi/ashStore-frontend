<template>
  <div>PAYMENT</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
  }),
  computed: {
  },
  methods: {
    setImage: (img) => {
      let newImg = `http://${img}`;
      return newImg;
    },
  },
  async fetch() {},
};
</script>
