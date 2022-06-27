<template>
  <v-list class="list-pro">
    <div class="nav-pro-cart">
      <div>products <span v-text="items.length"></span></div>
      <!-- more -->
      <div>
        <svg
          width="29"
          height="7"
          viewBox="0 0 29 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="14.6842"
            cy="3.4"
            rx="3.4"
            ry="3.40852"
            transform="rotate(90 14.6842 3.4)"
            fill="#81858B"
          />
          <ellipse
            cx="3.77694"
            cy="3.4"
            rx="3.4"
            ry="3.40852"
            transform="rotate(90 3.77694 3.4)"
            fill="#81858B"
          />
          <ellipse
            cx="25.5915"
            cy="3.4"
            rx="3.4"
            ry="3.40852"
            transform="rotate(90 25.5915 3.4)"
            fill="#81858B"
          />
        </svg>
      </div>
    </div>
    <v-list-item class="item-list-pro" v-for="(item, i) in items" :key="i">
      <!-- <v-lazy
        class="w-100"
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        transition="fade-transition"
      > -->
        <v-card
          :ripple="false"
          class="cart-products pb-7"
          width="100%"
          color="transparent"
          elevation="0"
        >
          <template v-if="item.discount">
            <v-divider color="#F02D46"></v-divider>
            <v-avatar class="product-dic" size="48" color="red">
              <span class="white--text caption"
                >% <span v-text="item.discount"></span
              ></span>
            </v-avatar>
          </template>
          <v-divider v-show="i > 1" v-else color="#D3D3D3"></v-divider>

          <div class="mt-7 d-flex flex-no-wrap justify-end flex-row-reverse">
            <!-- info product -->
            <div class="info-pro">
              <v-card-title
                single-line
                hide-details
                class="title-pro txt-black"
                v-text="item.title"
              ></v-card-title>

              <v-container class="pa-0">
                <!-- color -->
                <v-row align="center" class="flex-nowrap mx-0 pt-2">
                  <v-avatar size="15" :color="item.color.code">
                    <!-- <v-icon dark> mdi-account-circle </v-icon> -->
                  </v-avatar>

                  <div
                    class="txt-black ms-2 txt-font-small grey--text"
                    v-text="item.color.name"
                  ></div>
                </v-row>

                <!-- store -->
                <v-row align="center" class="flex-nowrap mx-0 pt-2">
                  <!-- <v-icon size="20" color="#A7A7A7"> mdi-store </v-icon> -->
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7643 3.5217L13.7101 0.35914C13.6734 0.250042 13.6021 0.155947 13.5069 0.0912262C13.4117 0.0265057 13.298 -0.00528257 13.183 0.000716822H1.58698C1.47203 -0.00528257 1.35829 0.0265057 1.26311 0.0912262C1.16793 0.155947 1.09656 0.250042 1.05988 0.35914L0.00569543 3.5217C-0.00189848 3.57766 -0.00189848 3.6344 0.00569543 3.69037V6.85292C0.00569543 6.99272 0.0612283 7.12679 0.160077 7.22564C0.258927 7.32449 0.392995 7.38002 0.532789 7.38002H1.05988V12.6509H2.11407V7.38002H5.27663V12.6509H13.7101V7.38002H14.2372C14.377 7.38002 14.5111 7.32449 14.6099 7.22564C14.7088 7.12679 14.7643 6.99272 14.7643 6.85292V3.69037C14.7719 3.6344 14.7719 3.57766 14.7643 3.5217ZM12.6559 11.5968H6.33081V7.38002H12.6559V11.5968ZM13.7101 6.32583H11.6017V4.21746H10.5476V6.32583H7.91209V4.21746H6.85791V6.32583H4.22244V4.21746H3.16825V6.32583H1.05988V3.7747L1.96648 1.0549H12.8035L13.7101 3.7747V6.32583Z"
                      fill="#81858B"
                    />
                  </svg>

                  <div
                    class="txt-black ms-2 txt-font-small grey--text"
                    v-text="item.store"
                  ></div>
                </v-row>

                <!-- guarantee -->
                <v-row align="center" class="flex-nowrap mx-0 pt-2">
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.75 0.125L0 2.70833V10.4583C0 14.739 3.46934 18.2083 7.75 18.2083C12.0307 18.2083 15.5 14.739 15.5 10.4583V2.70833L7.75 0.125ZM14.0469 10.4583C14.0469 13.9357 11.2274 16.7552 7.75 16.7552C4.27259 16.7552 1.45312 13.9357 1.45312 10.4583V3.79818L7.75 1.57813L14.0469 3.79818V10.4583Z"
                      fill="#81858B"
                    />
                    <path
                      d="M5.05362 8.4218C4.98628 8.35415 4.90623 8.30047 4.81809 8.26384C4.72994 8.22721 4.63543 8.20836 4.53998 8.20836C4.44453 8.20836 4.35001 8.22721 4.26187 8.26384C4.17372 8.30047 4.09368 8.35415 4.02634 8.4218C3.95869 8.48914 3.90501 8.56918 3.86838 8.65733C3.83175 8.74547 3.8129 8.83998 3.8129 8.93544C3.8129 9.03089 3.83175 9.1254 3.86838 9.21355C3.90501 9.30169 3.95869 9.38174 4.02634 9.44908L6.63793 12.0607L6.68031 12.103C6.74401 12.1669 6.81967 12.2175 6.90296 12.252C6.98624 12.2866 7.07553 12.3044 7.16569 12.3044C7.25586 12.3044 7.34515 12.2866 7.42843 12.252C7.51172 12.2175 7.58738 12.1669 7.65108 12.103L12.1618 7.59231C12.2256 7.52861 12.2763 7.45295 12.3108 7.36966C12.3454 7.28637 12.3631 7.19709 12.3631 7.10692C12.3631 7.01675 12.3454 6.92747 12.3108 6.84418C12.2763 6.76089 12.2256 6.68524 12.1618 6.62154L12.1053 6.56503C12.0416 6.50121 11.966 6.45058 11.8827 6.41603C11.7994 6.38149 11.7101 6.36371 11.6199 6.36371C11.5298 6.36371 11.4405 6.38149 11.3572 6.41603C11.2739 6.45058 11.1982 6.50121 11.1345 6.56503L7.16469 10.5329L5.05362 8.4218Z"
                      fill="#81858B"
                    />
                  </svg>

                  <div class="txt-black ms-2 txt-font-small grey--text">
                    return guarantee in case of failure
                  </div>
                </v-row>

                <!-- posted -->
                <v-row align="center" class="flex-nowrap mx-0 pt-2">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4586 3.1634L9.83363 0.0696537C9.75057 0.0239599 9.65731 0 9.56251 0C9.46771 0 9.37444 0.0239599 9.29138 0.0696537L3.66638 3.1634C3.57819 3.21196 3.50465 3.2833 3.45342 3.36997C3.4022 3.45664 3.37518 3.55548 3.37518 3.65615C3.37518 3.75683 3.4022 3.85566 3.45342 3.94233C3.50465 4.02901 3.57819 4.10035 3.66638 4.1489L9.00001 7.08234V13.1118L7.29226 12.1724L6.75001 13.1573L9.29138 14.5552C9.37441 14.6009 9.46769 14.625 9.56251 14.625C9.65733 14.625 9.7506 14.6009 9.83363 14.5552L15.4586 11.4614C15.5469 11.4129 15.6204 11.3415 15.6717 11.2549C15.7229 11.1682 15.75 11.0693 15.75 10.9687V3.65615C15.75 3.55546 15.7229 3.45662 15.6717 3.36994C15.6204 3.28327 15.5469 3.21194 15.4586 3.1634ZM9.56251 1.20478L14.0203 3.65615L9.56251 6.10753L5.1047 3.65615L9.56251 1.20478ZM14.625 10.6362L10.125 13.1112V7.08178L14.625 4.60678V10.6362Z"
                      fill="#81858B"
                    />
                    <path
                      d="M4.5 7.31244H0V6.18744H4.5V7.31244ZM5.625 11.8124H1.125V10.6874H5.625V11.8124ZM6.75 9.56244H2.25V8.43744H6.75V9.56244Z"
                      fill="#81858B"
                    />
                  </svg>

                  <div class="txt-black ms-2 txt-font-small grey--text">
                    Posted by seller
                  </div>
                </v-row>
              </v-container>

              <v-card-actions class="pa-0 pt-2 font-weight-black card-option">
                <span
                  v-if="item.discount"
                  class="txt-gray txt-font-small text-decoration-line-through"
                  >$24.55</span
                >
                <span class="txt-black txt-font-title"
                  >$<span v-text="item.price"></span
                ></span>
              </v-card-actions>
            </div>
            <!-- image product -->
            <div class="side-img">
              <v-img class="img-pro" :src="item.src"></v-img>
              <!-- number -->
              <v-btn-toggle
                class="ml-auto btn-toggle"
                v-model="toggle_exclusive"
              >
                <v-btn small class="px-1 btn btn-r">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>

                <v-btn small class="px-1 btn btn-num"> 1 </v-btn>

                <v-btn small class="px-1 btn btn-l">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </v-card>
        <v-divider color="#F02D46"></v-divider>
      <!-- </v-lazy> -->
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["items"],
  data: () => ({
    loading: false,
    isActive: false,
    toggle_exclusive: undefined,
  }),
  computed: {
    ...mapGetters("core", ["isBack"]),
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
