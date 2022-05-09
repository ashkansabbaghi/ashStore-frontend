<template>
    <v-container class="login pa-0">
        <v-row class="justify-center ma-0">
            <v-col class="">
                <div class="header">
                    <h1 class="welcome">welcome</h1>
                    <h5 class="text">We try to provide good services for you</h5>

                </div>

                <v-form class="form d-flex flex-column">

                    <!-- username -->
                    <v-text-field class="mt-16 w-90 ma-auto" v-model="login.username" :rules="rules.txt" maxlength="50"
                        solo label="username">
                    </v-text-field>

                    <!-- email -->
                    <v-text-field class="w-90 ma-auto" v-model="login.email" :rules="rules.email" maxlength="50" solo
                        label="email">
                    </v-text-field>

                    <!-- phone -->
                    <v-text-field class="w-90 ma-auto" v-model="login.phone" :rules="rules.phone" maxlength="11" solo
                        label="phone">
                    </v-text-field>

                    <!-- phone -->
                    <v-text-field class="w-90 ma-auto" v-model="login.password" :rules="rules.phone" maxlength="11" solo
                        label="password">
                    </v-text-field>

                    <v-btn x-large :loading="loading" class="mt-5  w-90 bg-color-second ma-auto">register
                    </v-btn>
                    <v-btn to="/auth/login" text :loading="loading" class="mt-4 mb-5 w-90 ma-auto txt-second">login
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    layout: "fullPage",
    name: "login",
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
        }, login: {
            username: "",
            email: "",
            phone: '',
            password: ""
        },
        loading: false,
    })
}
</script>

<style>
</style>