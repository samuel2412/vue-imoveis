import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.filter('currency', (value) => {
  return (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
