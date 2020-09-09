import Vue from 'vue'
import App from './App'

//#ifdef MP-WEIXIN || MP-ALIPAY
require('utils/hook.js')
//#endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
