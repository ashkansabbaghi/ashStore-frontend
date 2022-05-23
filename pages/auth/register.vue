<template>
  <SlotLoginHeader>
    <v-form class="form d-flex flex-column">
      <!-- username -->
      <v-text-field
        class="mt-16 w-90 ma-auto max-w-500"
        v-model="login.username"
        :rules="rules.txt"
        maxlength="50"
        solo
        label="username"
      >
      </v-text-field>

      <!-- email -->
      <v-text-field
        class="w-90 ma-auto max-w-500"
        v-model="login.email"
        :rules="rules.email"
        maxlength="50"
        solo
        label="email"
      >
      </v-text-field>

      <!-- phone -->
      <v-text-field
        class="w-90 ma-auto max-w-500"
        v-model="login.phone"
        :rules="rules.phone"
        maxlength="11"
        solo
        label="phone"
      >
      </v-text-field>

      <!-- phone -->
      <v-text-field
        class="w-90 ma-auto max-w-500"
        v-model="login.password"
        :rules="rules.phone"
        maxlength="11"
        solo
        label="password"
      >
      </v-text-field>

      <v-btn
        x-large
        :loading="loading"
        class="mt-5 w-90 bg-color-second ma-auto max-w-500"
        >register
      </v-btn>
      <v-btn
        to="/auth/login"
        text
        :loading="loading"
        class="mt-4 mb-5 w-90 ma-auto txt-second max-w-500"
        >login
      </v-btn>
    </v-form>
  </SlotLoginHeader>
</template>

<script>
export default {
  layout: "fullPage",
  name: "login",
  data: () => ({
    rules: {
      txt: [
        (v) => !!v || "is require",
        (v) => v.length <= 50 || "max 50 Character",
      ],
      email: [
        (v) => !!v || "is require",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      phone: [
        (v) => !!v || "is require",
        (v) => !/\s/g.test(v) || "not spaces between numbers",
        (v) => !isNaN(parseFloat(v)) || "Only numbers are allowed",
        (v) => v.length <= 11 || "max 11",
      ],
    },
    login: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    loading: false,
  }),
};
</script>

<style>
</style>