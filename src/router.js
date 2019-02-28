import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Quizz from './components/Quizz.vue'
import EndOfQuizz from './components/EndOfQuizz.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: Quizz
    },
    {
      path: '/endquizz',
      name: 'endquizz',
      component: EndOfQuizz
    },
    {
      path: '*',
      name: '404',
      component: Home
    }
  ]
})
