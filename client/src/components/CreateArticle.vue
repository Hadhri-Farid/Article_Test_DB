<template>
  <v-card color="grey lighten-4">
    <h1>Creer votre article</h1>
    <v-card-text>
      <v-container fluid>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Titre</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field
              label="Titre de votre article"
              v-model="title"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Contenu</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field
              label="Contenu de votre article"
              v-model="text"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Url</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field
              label="Url de votre Image"
              v-model="img"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <div class="error" v-html="error" />
          </v-flex>
      </v-layout>
      <v-btn @click="createArticle" color="primary">Creer</v-btn>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import VerifInput from '@/services/VerifInput'
import store from './ArticlesStore'

export default {

  store: store,

  data () {
    return {
      title: '',
      text: '',
      img: '',
      error: null
    }
  },
  methods: {
    async createArticle () {
      try {
        await VerifInput.register({
          title: this.title,
          text: this.text,
          img: this.img
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- je n'arrive pas à mettre uniquement le text en rouge sur fond blanc -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error {
  color: white;
}
</style>
