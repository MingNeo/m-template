import Vue from 'vue'
import App from './App'{{if router}}
import router from './router'{{/if}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app'{{if router}},
  router,{{/if}}
  template: '<App/>',
  components: { App }
})
