import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueCarousel from 'vue-carousel';


Vue.config.productionTip = false

new Vue({
  router,
  VueCarousel,
  render: h => h(App),
}).$mount('#app')
