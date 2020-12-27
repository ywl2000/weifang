import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 全局组件
import MH from './components/HelloWorld.vue'
import TAB1 from './components/demo/tab1.vue'
import TAB2 from './components/demo/tab2.vue'
import TAB3 from './components/demo/tab3.vue'
// import X from './components/demo/xiang.vue'

  // 导入elementui
  import ElementUI from 'element-ui';
  // 导入elementui的样式表
  import 'element-ui/lib/theme-chalk/index.css';
 // 通过Vue.use()方法注册为插件
 Vue.use(ElementUI)


  // 导入mint ui
  import MintUI from "mint-ui"
  // 导入mint-ui的样式表
  import "mint-ui/lib/style.min.css"
// import { use } from 'vue/types/umd'
  // 通过Vue.use()方法注册为插件
  Vue.use(MintUI)

  // avue
  import Avue from '@smallwei/avue';
  import '@smallwei/avue/lib/index.css';
  Vue.use(Avue);
  // Vue.use(window.AVUE);


Vue.config.productionTip = false
// 全局组件
Vue.component("my-header",MH)
Vue.component("my-tab1",TAB1)
Vue.component("my-tab2",TAB2)
Vue.component("my-tab3",TAB3)
// Vue.component("my-xiang",X)

Vue.prototype.$axios=axios
axios.defaults.baseURL = 'https://ocr.tencentcloudapi.com/?Action=QrcodeOCR'

Vue.config.productionTip = false
axios.defaults.baseURL = '/api'

// console.log(axios.defaults.baseURL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
