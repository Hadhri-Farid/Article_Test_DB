<template>
    <v-app>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons' rel="stylesheet">
       <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <page-header></page-header>
    <v-container fluid>
      <router-view/>
    </v-container>
    </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
