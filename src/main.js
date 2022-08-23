import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router/index'
import store from './store/index'
//导入 common.js工具类
import {
    getCurDate,
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
} from './utils/common'

// 引入封装好的axios请求
import {request} from '@/api/index'

// 引入公共css
import './assets/css/common.css'
// 引入semantic-ui
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css/semantic.min.js'

// 关闭生产提示信息
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$getCurDate = getCurDate
Vue.prototype.$setSessionStorage = setSessionStorage
Vue.prototype.$getSessionStorage = getSessionStorage
Vue.prototype.$removeSessionStorage = removeSessionStorage
Vue.prototype.$setLocalStorage = setLocalStorage
Vue.prototype.$getLocalStorage = getLocalStorage
Vue.prototype.$removeLocalStorage = removeLocalStorage

Vue.use(ElementUI)
Vue.use(SuiVue)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
