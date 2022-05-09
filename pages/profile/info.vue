<template>
  <v-container class="profile">
    <v-row class="white justify-center ma-0">
      <v-col class="side-2" cols="12">
        <v-form class="form">
          <hr class="line-top-custom" />
          <v-list flat>



            <!-- username -->
            <v-list-item class="list-custom">
              <v-text-field class="mt-12" v-model="info.username" :rules="rules.txt" counter maxlength="50"
                label="username">
              </v-text-field>
            </v-list-item>

            <!-- email -->
            <v-list-item class="list-custom">
              <v-text-field class="mt-5" v-model="info.email" :rules="rules.email" counter maxlength="50" label="email">
              </v-text-field>
            </v-list-item>

            <!-- phone -->
            <v-list-item class="list-custom">
              <v-text-field class="mt-5" v-model="info.phone" :rules="rules.phone" counter maxlength="11" label="phone">
              </v-text-field>
            </v-list-item>

            <!-- gender -->
            <v-list-item class="list-custom">
              <v-select class="mt-5" :items="genders" label="gender" v-model="info.gender"></v-select>
            </v-list-item>


            <!-- date birthday -->
            <v-list-item class="list-custom mt-5">
              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="info.data_birth" label="Birthday date" readonly v-bind="attrs" v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="info.data_birth" :active-picker.sync="activePicker" min="1950-01-01">
                </v-date-picker>
              </v-menu>
            </v-list-item>
          </v-list>
          <v-btn x-large :loading="loading" class="mt-5 mb-5 w-90 bg-color-second ma-auto">save
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  layout: 'profile',
  name: 'profile',
  data: () => ({
    rules: {
      txt: [
        v => !!v || "is require",
        v => v.length <= 50 || "max 50 Character"],
      email: [
        v => !!v || "is require",
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      phone: [
        v => !!v || "is require",
        v => !(/\s/g.test(v)) || "not spaces between numbers",
        v => !isNaN(parseFloat(v)) || "Only numbers are allowed",
        v => v.length <= 11 || "max 11"
      ]
    },
    genders: ['male', 'female'],
    info: {
      username: "ashkan",
      email: "ashkan@gmail.com",
      phone: '09396084433',
      gender: "male",
      data_birth: "2022-05-09"
    },
    loading: false,
    // date picker
    activePicker: null,
    menu: false,
  }),
  methods: {
    // save(date) {
    //   this.$refs.menu.save(date)
    // },
  }
}
</script>
