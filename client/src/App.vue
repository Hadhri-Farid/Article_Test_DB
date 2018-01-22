<template>
  <div id="app">
    <v-app>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons' rel="stylesheet">
       <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
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
