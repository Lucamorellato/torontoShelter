import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    "accent": "#8bc34a",
  }
})


new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')

