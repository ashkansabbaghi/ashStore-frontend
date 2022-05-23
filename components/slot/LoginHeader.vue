<template>
  <v-container class="login pa-0">
    <v-row class="justify-center ma-0">
      <v-col>
        <div class="back">
          <v-icon @click="backBlogs" class="ic-back c-pointer">
            mdi-chevron-left
          </v-icon>
          <span @click="backBlogs" class="c-pointer">go to blogs</span>
        </div>
        <div class="header">
          <svg
            class="logo"
            width="515"
            height="441"
            viewBox="0 0 515 441"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="266.238"
              y="14"
              width="350.665"
              height="221.117"
              rx="5"
              transform="rotate(45 266.238 14)"
              fill="#0687AF"
            />
            <g filter="url(#filter0_d_453_597)">
              <rect
                x="422.311"
                y="170.353"
                width="350.665"
                height="221.117"
                rx="5"
                transform="rotate(135 422.311 170.353)"
                fill="#494949"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_453_597"
                x="-2"
                y="-1.99988"
                width="444.311"
                height="444.311"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_453_597"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_453_597"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h1 class="welcome mt-2">welcome</h1>
          <h5 class="text">We try to provide good services for you</h5>
        </div>
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginHeader",
  methods: {
    backBlogs() {
      this.$router.push("/blogs");
    },
  },
};
</script>

<style>
</style>