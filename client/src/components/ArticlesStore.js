import Vuex from 'vuex'
import 'vue-use-vuex'

const state = {
  articles: [{
    title: 'mon titre'
  }]
}

const mutations = {

  ADD_ARTICLE: (state, title) => {
    state.articles.push({
      title: title
    })
  }
}

const getters = {
  articles: (state) => state.articles
}

let store = new Vuex.Store({

  state: state,

  mutations: mutations,

  getters: getters,

  actions: {},

  strict: true

})

global.store = store

export default store
