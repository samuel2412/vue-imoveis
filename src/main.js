import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAsIAZu-uzbE_CBxU4Xr0xzal9tJG7BHXc',
    libraries: 'places' // necessary for places input
  }
})

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
