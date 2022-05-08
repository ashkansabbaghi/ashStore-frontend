<template>
  <v-container class="profile">
    <v-row class="justify-center ma-0">
      <v-col class="white side-2" cols="12">
        <hr class="line-top-custom" />
        <v-list flat>
          <!-- username -->
          <v-list-item class="list-custom">
            <v-text-field class="mt-12" v-model="info.username" :rules="rules" counter maxlength="50" label="username">
            </v-text-field>
          </v-list-item>

          <!-- email -->
          <v-list-item class="list-custom">
            <v-text-field class="mt-5" v-model="info.email" :rules="rules" counter maxlength="50" label="email">
            </v-text-field>
          </v-list-item>

          <!-- email -->
          <v-list-item class="list-custom">
            <v-select class="mt-5" :items="genders" label="gender" v-model="info.gender"></v-select>
          </v-list-item>


        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'profile',
  name: 'profile',
  data: () => ({
    rules: [v => v.length <= 50 || "max 50 Character"],
    genders :['male', 'female'],
    info: {
      username: "ashkan",
      email: "ashkan@gmail.com",
      phone: '09396084433',
      gender: "",
    }
  })
}
</script>
