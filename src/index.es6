import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.config.debug = true

Vue.use(VueRouter)

const router = new VueRouter({
  base: __dirname,
  routes: [
    {
      path: '/'
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   template: '<App />',
//   components: {
//     App
//   }
// })
