<template>
    <v-container class="blog">
        <v-row class="ma-0" justify="center" align="center">
            <v-col class="pa-0 w-90" cols="12" sm="12">
                <v-text-field class="input-title w-90 ma-auto mb-5" v-model="blog.title" :rules="rules" counter
                    maxlength="50" label="title" solo></v-text-field>
                <Editor v-model="blog.content" />
            </v-col>
            <v-btn color="success" x-large @click="clickPublish" :loading="loading" class="mt-5 w-90">publish</v-btn>
        </v-row>
        <v-alert  v-if="alert.isActive" border="right" :color="alert.color" elevation="24" :type="alert.type"
           >{{alert.text}}
        </v-alert>
    </v-container>
</template>

<script>
export default {
    layout: 'child',
    data: () => ({
        blog: {
            image: [],
            title: "",
            content: `<p>content blog.</p>`
        },
        rules: [v => v.length <= 50 || 'Max 50 Character'],
        loading: false,
        alert: {
            isActive: false,
            text: "this blog uploaded successfully",
            type: "success",
            color: "green"
        }
    }),
    methods: {
        async clickPublish() {
            this.loading = true;
            this.alert.isActive = true;
            await new Promise(r => setTimeout(r, 3000))
            this.loading = false
            this.alert.isActive = false;
        }
    }

}
</script>
