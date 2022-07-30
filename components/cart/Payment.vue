<template>
  <v-container>
    <!-- choice methods payment -->
    <v-list class="list-pro desc mb-8">
      <!-- title -->
      <div class="nav-pro-cart">
        <h1 class="title">
          <svg
            class="ma-auto mr-2"
            width="20"
            height="15"
            viewBox="0 0 16 12"
            fill="#81858B"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.8125 0.375C2.06658 0.375 1.35121 0.671316 0.823762 1.19876C0.296316 1.72621 0 2.44158 0 3.1875V3.75H15.75V3.1875C15.75 2.44158 15.4537 1.72621 14.9262 1.19876C14.3988 0.671316 13.6834 0.375 12.9375 0.375H2.8125ZM15.75 4.875H0V8.8125C0 9.55842 0.296316 10.2738 0.823762 10.8012C1.35121 11.3287 2.06658 11.625 2.8125 11.625H12.9375C13.6834 11.625 14.3988 11.3287 14.9262 10.8012C15.4537 10.2738 15.75 9.55842 15.75 8.8125V4.875ZM10.6875 8.25H12.9375C13.0867 8.25 13.2298 8.30926 13.3352 8.41475C13.4407 8.52024 13.5 8.66331 13.5 8.8125C13.5 8.96168 13.4407 9.10476 13.3352 9.21025C13.2298 9.31574 13.0867 9.375 12.9375 9.375H10.6875C10.5383 9.375 10.3952 9.31574 10.2898 9.21025C10.1843 9.10476 10.125 8.96168 10.125 8.8125C10.125 8.66331 10.1843 8.52024 10.2898 8.41475C10.3952 8.30926 10.5383 8.25 10.6875 8.25Z"
            />
          </svg>

          <span>Payment Method</span>
        </h1>
      </div>
      <!-- item -->
      <v-radio-group v-model="selectDelivery">
        <v-radio
          class="mt-2"
          label="red"
          color="#0687AF"
          v-for="(item, i) in itemsDelivery"
          :key="i"
          :value="i"
        >
          <template v-slot:label>
            {{ item }}
          </template>
        </v-radio>
      </v-radio-group>
    </v-list>

    <!-- Orders Summary -->
    <v-list class="list-pro desc mb-8 overflow-hidden">
      <!-- title -->
      <div class="nav-pro-cart">
        <h1 class="title">
          <svg
            class="ma-auto mr-2"
            width="20"
            height="13"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3833 9.95633L8.22676 7.79984L9.35612 6.66888L10.3833 7.6976L14.3832 3.70409L15.5101 4.83585L10.3833 9.95553V9.95633ZM7.18844 8.03066H0.00012207V6.43326H7.18844V8.03066ZM10.3833 4.83585H0.00012207V3.23845H10.3833V4.83585ZM10.3833 1.64104H0.00012207V0.0436401H10.3833V1.64104Z"
              fill="#494949"
            />
          </svg>
          <span>Orders Summary</span>
        </h1>
      </div>
      <!-- item -->
      <v-container class="summary ">
        <div class="title">
          <svg
            class="ma-auto mr-4"
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.64286 7.72599H11.5V9.2713H1.64286V7.72599ZM0 3.86273H8.21429V5.40804H0V3.86273Z"
              fill="#0687AF"
            />
            <path
              d="M22.9335 8.19475L20.4692 2.78619C20.406 2.64717 20.3007 2.52869 20.1665 2.44545C20.0323 2.36221 19.8751 2.31787 19.7143 2.31796H17.25V0.772653C17.25 0.567732 17.1635 0.371205 17.0095 0.226305C16.8554 0.0814044 16.6465 0 16.4286 0H3.28576V1.54531H15.6072V11.2467C15.2329 11.4512 14.9053 11.7233 14.6434 12.0474C14.3814 12.3715 14.1903 12.7412 14.081 13.1351H8.91912C8.71919 12.4067 8.24372 11.772 7.58183 11.3498C6.91994 10.9276 6.11707 10.747 5.32373 10.8418C4.53038 10.9366 3.80102 11.3002 3.27235 11.8647C2.74369 12.4291 2.45203 13.1555 2.45203 13.9077C2.45203 14.66 2.74369 15.3864 3.27235 15.9508C3.80102 16.5152 4.53038 16.8789 5.32373 16.9737C6.11707 17.0685 6.91994 16.8879 7.58183 16.4657C8.24372 16.0435 8.71919 15.4087 8.91912 14.6804H14.081C14.2597 15.3435 14.6683 15.9317 15.2423 16.3518C15.8163 16.7719 16.5228 17 17.25 17C17.9773 17 18.6838 16.7719 19.2578 16.3518C19.8318 15.9317 20.2404 15.3435 20.4191 14.6804H22.1786C22.3965 14.6804 22.6054 14.599 22.7595 14.4541C22.9135 14.3092 23 14.1127 23 13.9077V8.49918C23.0001 8.39451 22.9774 8.29092 22.9335 8.19475ZM5.75005 15.4531C5.42512 15.4531 5.10749 15.3624 4.83733 15.1926C4.56716 15.0228 4.35659 14.7815 4.23225 14.4991C4.1079 14.2167 4.07537 13.906 4.13876 13.6063C4.20215 13.3065 4.35861 13.0312 4.58837 12.8151C4.81813 12.5989 5.11086 12.4518 5.42954 12.3921C5.74823 12.3325 6.07855 12.3631 6.37874 12.4801C6.67893 12.597 6.93551 12.7951 7.11603 13.0492C7.29655 13.3033 7.3929 13.6021 7.3929 13.9077C7.39247 14.3175 7.21924 14.7103 6.91124 15C6.60324 15.2897 6.18563 15.4526 5.75005 15.4531ZM17.25 3.86326H19.1722L20.9333 7.72653H17.25V3.86326ZM17.25 15.4531C16.9251 15.4531 16.6075 15.3624 16.3373 15.1926C16.0672 15.0228 15.8566 14.7815 15.7322 14.4991C15.6079 14.2167 15.5754 13.906 15.6388 13.6063C15.7021 13.3065 15.8586 13.0312 16.0884 12.8151C16.3181 12.5989 16.6109 12.4518 16.9295 12.3921C17.2482 12.3325 17.5785 12.3631 17.8787 12.4801C18.1789 12.597 18.4355 12.7951 18.616 13.0492C18.7965 13.3033 18.8929 13.6021 18.8929 13.9077C18.8925 14.3175 18.7192 14.7103 18.4112 15C18.1032 15.2897 17.6856 15.4526 17.25 15.4531ZM21.3572 13.1351H20.4191C20.2382 12.4733 19.8289 11.8866 19.2553 11.4671C18.6818 11.0477 17.9765 10.819 17.25 10.8171V9.27183H21.3572V13.1351Z"
              fill="#0687AF"
            />
          </svg>
          <span class="text">2021.21.1 10:00 to 12:30</span>
        </div>
        <span class="caption">Call, to select the sending type</span>
        <v-row class="ma-0 mt-8 mb-16 pb-8" justify="center" align="center">
          <v-col class="pa-0" cols="12" sm="12">
            <SliderSmall :items="products" notDesc="true" />
          </v-col>
        </v-row>
      </v-container>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectDelivery: "",
    itemsDelivery: ["cart to cart", "(COD) Cash On Delivery"],
    isActive: false,
    products: [
      {
        id: 1,
        image: "http://",
        name: "title product discount",
        caption: "title caption products discount",
        price: 12,
        discount: 0.2,
        slug: "slug_1",
      },
      {
        id: 2,
        image: "http://",
        name: "title product",
        caption: "title caption products discount",
        price: 12,
        discount: 0.2,
        slug: "slug_2",
      },
      {
        id: 3,
        image: "http://",
        name: "title product",
        caption: "title caption products",
        price: 12,
        discount: 0.2,
        slug: "slug_3",
      },
      {
        id: 4,
        image: "http://",
        name: "title product",
        caption: "title caption products",
        price: 12,
        discount: 0.2,
        slug: "slug",
      },
      // {
      //   id: 5,
      //   image: "http://",
      //   name: "title product",
      //   caption: "title caption products",
      //   price: 12,
      //   discount: 0.2,
      //   slug: "slug"
      // },
      // {
      //   id: 6,
      //   image: "http://",
      //   name: "title product",
      //   caption: "title caption products",
      //   price: 12,
      //   discount: 0.2,
      //   slug: "slug"
      // },
      // {
      //   id: 7,
      //   image: "http://",
      //   name: "title product",
      //   caption: "title caption products",
      //   price: 12,
      //   discount: 0.2,
      //   slug: "slug"
      // },
    ],
  }),
  computed: {},
  methods: {
    setImage: (img) => {
      let newImg = `http://${img}`;
      return newImg;
    },
  },
  async fetch() {},
};
</script>
