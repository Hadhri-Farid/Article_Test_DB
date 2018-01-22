<template>
    <v-toolbar fixed>
        <v-toolbar-title class="mr-4">
            Articles CRUD
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn router to="/">
                Voir vos articles
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn router to="createArticle">
                Creer votre article
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
