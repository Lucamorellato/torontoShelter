import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hero from './components/Hero.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/torontoShelter/',
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {default: Home, sidebar: Hero},
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
    path: '*',
    redirect: '/index.html'
    }
  ]
})
