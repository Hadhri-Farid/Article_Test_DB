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
              name="input-1"
              label="Titre de votre article"
              id="title"
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
              name="input-1"
              label="Contenu de votre article"
              id="text"
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
              name="input-1"
              label="Url de votre Image"
              id="image"
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
export default {
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
.error {
  color: white;
}
</style>
