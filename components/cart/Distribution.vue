<template>
  <v-container>
    <!-- delivery address -->
    <v-list class="list-pro desc mb-8">
      <!-- title -->
      <div class="nav-pro-cart">
        <h1 class="title">
          <v-icon>mdi-map-marker </v-icon>
          Delivery Address
        </h1>
      </div>
      <!-- item -->
      <v-radio-group v-model="selectDelivery" column>
        <v-radio
          class="custom-radio"
          label="red"
          color="#0687AF"
          v-for="(item, i) in items"
          :key="i"
          :value="i"
        >
          <template v-slot:label>
            <v-card
              :ripple="false"
              class="cart-products pb-7"
              width="100%"
              color="transparent"
              elevation="0"
            >
              <v-divider v-show="i > 0" color="#D3D3D3"></v-divider>
              <div class="mt-7 d-flex justify-space-between flex-row">
                <!-- info product -->
                <div class="info-pro w-auto pl-10">
                  <v-card-title
                    single-line
                    hide-details
                    class="title-pro txt-black"
                    v-text="item.title"
                  ></v-card-title>

                  <v-container class="pa-0">
                    <!-- user -->
                    <v-row align="center" class="flex-nowrap mx-0 pt-2">
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 0C5.78579 0 5.08762 0.211788 4.49377 0.608582C3.89993 1.00538 3.43708 1.56935 3.16377 2.2292C2.89045 2.88904 2.81894 3.61512 2.95828 4.3156C3.09761 5.01609 3.44154 5.65953 3.94656 6.16455C4.45158 6.66958 5.09502 7.0135 5.79551 7.15284C6.49599 7.29217 7.22207 7.22066 7.88191 6.94734C8.54176 6.67403 9.10574 6.21118 9.50253 5.61734C9.89932 5.02349 10.1111 4.32532 10.1111 3.61111C10.1111 2.65339 9.73066 1.73489 9.05344 1.05767C8.37623 0.380455 7.45773 0 6.5 0ZM6.5 5.77778C6.07147 5.77778 5.65257 5.65071 5.29626 5.41263C4.93996 5.17455 4.66225 4.83617 4.49826 4.44026C4.33427 4.04435 4.29136 3.60871 4.37496 3.18842C4.45857 2.76812 4.66492 2.38206 4.96794 2.07905C5.27095 1.77603 5.65701 1.56968 6.0773 1.48608C6.4976 1.40248 6.93324 1.44538 7.32915 1.60937C7.72505 1.77336 8.06344 2.05107 8.30152 2.40738C8.53959 2.76368 8.66667 3.18259 8.66667 3.61111C8.66667 4.18575 8.43839 4.73685 8.03206 5.14318C7.62574 5.54951 7.07464 5.77778 6.5 5.77778ZM13 13.7222V13C13 11.6592 12.4674 10.3733 11.5193 9.42519C10.5712 8.47708 9.28526 7.94445 7.94444 7.94445H5.05556C3.71474 7.94445 2.42884 8.47708 1.48074 9.42519C0.532637 10.3733 0 11.6592 0 13V13.7222H1.44444V13C1.44444 12.0423 1.8249 11.1238 2.50211 10.4466C3.17933 9.76935 4.09783 9.38889 5.05556 9.38889H7.94444C8.90217 9.38889 9.82067 9.76935 10.4979 10.4466C11.1751 11.1238 11.5556 12.0423 11.5556 13V13.7222H13Z"
                          fill="#81858B"
                        />
                      </svg>

                      <div
                        class="txt-black ms-2 txt-font-small grey--text"
                        v-text="item.color.name"
                      ></div>
                    </v-row>

                    <!-- code post -->
                    <v-row align="center" class="flex-nowrap mx-0 pt-2">
                      <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.76466 0C0 0 0.38246 0.20254 0.76466 0.51324L6.5 4.87838L12.2353 0.52676C12.6181 0.21606 13 0 12.2353 0H0.76466ZM0 1.02596V7.45524C0 7.83354 0.38688 8.32 0.6929 8.32H12.3071C12.6134 8.32 13 7.83354 13 7.45524V1.02596L6.5 5.98546L0 1.02596Z"
                          fill="#81858B"
                        />
                      </svg>

                      <div
                        class="txt-black ms-2 txt-font-small grey--text"
                        v-text="item.store"
                      ></div>
                    </v-row>

                    <!-- mobile -->
                    <v-row align="center" class="flex-nowrap mx-0 pt-2">
                      <svg
                        width="13"
                        height="18"
                        viewBox="0 0 13 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4 1.125C10.7448 1.125 11.0754 1.24353 11.3192 1.4545C11.563 1.66548 11.7 1.95163 11.7 2.25V15.75C11.7 16.0484 11.563 16.3345 11.3192 16.5455C11.0754 16.7565 10.7448 16.875 10.4 16.875H2.6C2.25522 16.875 1.92456 16.7565 1.68076 16.5455C1.43696 16.3345 1.3 16.0484 1.3 15.75V2.25C1.3 1.95163 1.43696 1.66548 1.68076 1.4545C1.92456 1.24353 2.25522 1.125 2.6 1.125H10.4ZM2.6 0C1.91044 0 1.24912 0.237053 0.761522 0.65901C0.273928 1.08097 0 1.65326 0 2.25V15.75C0 16.3467 0.273928 16.919 0.761522 17.341C1.24912 17.7629 1.91044 18 2.6 18H10.4C11.0896 18 11.7509 17.7629 12.2385 17.341C12.7261 16.919 13 16.3467 13 15.75V2.25C13 1.65326 12.7261 1.08097 12.2385 0.65901C11.7509 0.237053 11.0896 0 10.4 0L2.6 0Z"
                          fill="#81858B"
                        />
                        <path
                          d="M6.62496 15.5501C6.97637 15.5501 7.31339 15.4105 7.56187 15.162C7.81036 14.9135 7.94996 14.5765 7.94996 14.2251C7.94996 13.8737 7.81036 13.5367 7.56187 13.2882C7.31339 13.0397 6.97637 12.9001 6.62496 12.9001C6.27355 12.9001 5.93653 13.0397 5.68804 13.2882C5.43956 13.5367 5.29996 13.8737 5.29996 14.2251C5.29996 14.5765 5.43956 14.9135 5.68804 15.162C5.93653 15.4105 6.27355 15.5501 6.62496 15.5501Z"
                          fill="#81858B"
                        />
                      </svg>

                      <div class="txt-black ms-2 txt-font-small grey--text">
                        return guarantee in case of failure
                      </div>
                    </v-row>
                  </v-container>
                </div>

                <!-- item more -->
                <v-btn
                  text
                  @click="clickMore(i)"
                  class="align-self-center rotate-90"
                >
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
                    /></svg
                ></v-btn>
              </div>
            </v-card>
          </template>
        </v-radio>
      </v-radio-group>
      <v-divider color="#D3D3D3"></v-divider>
      <!-- <a class="add-address">ADD ADDRESS</a> -->
      <DialogFormAddress title="Add Address" class="add-address" />

    </v-list>

    <!-- delivery time -->
    <v-list class="list-pro desc mb-8">
      <!-- title -->
      <v-container class="pa-0">
        <v-row class="ma-0">
          <div class="nav-pro-cart">
            <h1 class="title">
              <v-icon> mdi-timelapse </v-icon>
              Delivery Time
            </h1>
          </div>
        </v-row>
        <!-- item -->
        <v-row class="justify-space-between ma-0 pt-5">
          <div>
            <v-icon x-small color="#0687AF"> mdi-checkbox-blank-circle</v-icon>
            <input type="text" class="showPicker" placeholder="select date" />
          </div>
          <v-btn text class="showPicker txt-second" @click="showPicker = true"
            >select</v-btn
          >
        </v-row>
        <!-- open picker -->
        <date-picker
          v-model="date"
          :auto-submit="true"
          custom-input=".showPicker"
          type="datetime"
          :show="showPicker"
          compact-time
          color="#0687AF"
          min="1401/04/08 08:00"
          max="1401/04/26 20:00"
          :disable="['1397/05/07', '1397/05/08', 'Friday']"
        />
      </v-container>
    </v-list>


  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["items"],
  data: () => ({
    loading: false,
    isActive: false,
    toggle_exclusive: undefined,
    selectDelivery: "",
    date: "",
    showPicker: false,
  }),
  computed: {
    ...mapGetters("core", ["isBack"]),
  },
  methods: {
    setImage: (img) => {
      let newImg = `http://${img}`;
      return newImg;
    },
    clickMore: (i) => {
      console.log("click-more-icon", i);
    },
  },
  async fetch() {},
};
</script>
