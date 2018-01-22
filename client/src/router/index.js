import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreateArticle from '../components/CreateArticle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/createArticle',
      name: 'CreateArticle',
      component: CreateArticle
    }
  ]
})
