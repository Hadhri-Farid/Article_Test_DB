// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
  router,
  render: h => h(require('./App'))
})

// el: '#app',
//   store: require('./components/ArticlesStore'),
//     router,
//     components: { App },
// template: '<App/>'

// Je n'arrive toujours pas à attendre le store avant de lancer Vue.use(Vuex)
// mettre import en dessous du Vue.use(Vuex) ne fonctionne pas non plus, je pense que les imports passe en priorité lors de la lecture du code
