// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuex)

// [vuex] must call Vue.use(Vuex) before creating a store instance
// Je me prend plusieurs fois cette erreur, j'ai utilisé 3/4 solutions différentes mais toujours rien
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store: require('./components/ArticlesStore'),
  router,
  components: { App },
  template: '<App/>'
})

// Je n'arrive toujours pas à attendre le store avant de lancer Vue.use(Vuex)
// mettre import de App en dessous du Vue.use(Vuex) ne fonctionne pas non plus, je pense que les imports passe en priorité lors de la lecture du code

// J'ai l'impression que c'est router qui pose un probleme, mais je n'arrive pas à mettre le doigt dessus

// Finalement la solution dans ArticlesStore (import vue-use-vuex) je ne comprend pas trop comment mais il fonctionne mais ça marche
