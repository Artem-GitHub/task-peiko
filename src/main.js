import Vue from 'vue'
import App from './App.vue'
import { payload } from '@/mocData/index.js'
import simulateAsyncReq from '@/plugins/getDataFunc.js'

Vue.use('payload', payload)
Vue.use('simulateAsyncReq', simulateAsyncReq)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
