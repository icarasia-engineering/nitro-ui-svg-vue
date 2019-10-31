import Vue from 'vue'
import App from './App.vue'
import * as svgicon from 'vue-svgicon'

Vue.use(svgicon, {
  classPrefix: 'NitroIcon-',
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
