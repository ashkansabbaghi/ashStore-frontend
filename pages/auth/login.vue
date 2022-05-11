<template>
  <v-container class="login pa-0">
    <v-row class="justify-center ma-0">
      <v-col>
        <div class="header">
          <h1 class="welcome">welcome</h1>
          <h5 class="text">We try to provide good services for you</h5>
        </div>
        <v-form class="form d-flex flex-column">
          <!-- email -->
          <v-text-field
          max-width="500px"
            class="mt-16 w-90 ma-auto max-w-500"
            v-model="login.email"
            :rules="rules.email"
            maxlength="50"
            solo
            label="email"
          >
          </v-text-field>
          <!-- password -->
          <v-text-field
            class="w-90 ma-auto max-w-500"
            v-model="login.password"
            :rules="rules.pass"
            minlength="6"
            solo
            label="password"
          >
          </v-text-field>

          <v-btn
            x-large
            :loading="loading"
            class="mt-5 w-90 bg-color-second ma-auto max-w-500"
            >login
          </v-btn>
          <v-btn
            to="register"
            text
            :loading="loading"
            class="mt-4 mb-5 w-90 ma-auto txt-second max-w-500"
            >register
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "fullPage",

  name: "register",
  data: () => ({
    rules: {
      email: [
        (v) => !!v || "is require",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],

      pass: [
        (v) => !!v || "is require",
        (v) => !/\s/g.test(v) || "not spaces between numbers",
        (v) => v.length > 6 || "min 6",
      ],
    },
    login: {
      email: "",
      password: "",
    },
    loading: false,
  }),
};
</script>

<style></style>
