<template>
  <v-container class="profile">
    <v-row class="justify-center ma-0">
      <v-col cols="12">
        <svg class="el-center" width="138" height="55" viewBox="0 0 138 55" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="135.5" cy="52.5" r="2.5" fill="#0687AF" />
          <path
            d="M2.18557e-07 4.5C3.39263e-07 3.11929 1.11929 2 2.5 2C3.88071 2 5 3.11929 5 4.5C5 5.88071 3.88071 7 2.5 7C1.11929 7 9.78513e-08 5.88071 2.18557e-07 4.5Z"
            fill="#0687AF" />
          <circle cx="130.5" cy="9.5" r="7.5" fill="#0687AF" />
          <circle cx="66" cy="15" r="15" fill="#0687AF" />
          <circle cx="7.5" cy="47.5" r="7.5" transform="rotate(-180 7.5 47.5)" fill="#0687AF" />
          <circle cx="118" cy="35" r="5" fill="#0687AF" />
          <circle cx="20" cy="22" r="5" transform="rotate(-180 20 22)" fill="#0687AF" />
          <path
            d="M43 46C43 40.4772 47.4772 36 53 36H79C84.5228 36 89 40.4772 89 46V53C89 54.1046 88.1046 55 87 55H45C43.8954 55 43 54.1046 43 53V46Z"
            fill="#C4C4C4" />
        </svg>
        <h3 class="txt-1 text-center txt-black">username</h3>
        <p class="txt-2  text-center txt-gray ">ashkansabbaghi@gmail.com</p>
      </v-col>
      <v-col class="white side-2" cols="12">
        <hr class="line-top-custom" />
        <v-list flat>
          <v-list-item-group color="primary">
            <v-list-item class="list-custom" v-for="i in items" :key="i.length">
              <v-list-item-content>
                <v-list-item-title v-text="i.title" @click="$router.push(i.link)"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar>
                <v-icon color="gray">
                  mdi-chevron-right
                </v-icon>
              </v-list-item-avatar>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>

    <FadeContentBottom />
    <TheFooter />
  </v-container>
</template>

<script>
export default {
  layout: 'profile',
  name: 'profile',
  data: () => ({
    selectItem: null,
    items: [
      { title: "info", link: "profile/info" },
      { title: "address", link: "profile/address" },
    ]
  }),

}
</script>
