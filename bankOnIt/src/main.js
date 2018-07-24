// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)


Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: "#00C853",
    secondary: "#E8F5E9",
    accent: "#00695C",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#009688",
    success: "#4caf50"
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})
