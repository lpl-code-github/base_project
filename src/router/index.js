/*
    router配置
 */
import Vue from 'vue'
import Router from 'vue-router'
// element-ui消息提示框
import {
    Message
} from 'element-ui'
// vuex
import store from '../store/index'


// Vue.use(),使用Router
Vue.use(Router)

//使用ES提出的方法：路由懒加载，优化前端页面
const routes = [
    {
        path: '/', redirect: '/index',
    },
    {
        path: '/index', component: () => import('@/views/Index')
    },

    {
        path: '/home', component: () => import('@/views/Home')
    },
    /**
     * children 写法
     */
    // {
    //     path: '/console',
    //     component: () => import('@/views/Console'),
    //     redirect:'/overview',
    //     children:[
    //         {path: '/overview', component: () => import('@/components/Overview')},
    //         {path: '/ossAdmin', component: () => import('@/components/OssAdmin')},
    //         {path: '/system', component: () => import('@/components/System')},
    //         {path: '/log', component: () => import('@/components/Log')}
    //     ]
    // }
]


//这里使用了history模式，这种模式充分利用 history.pushState API来完成URL跳转而无须重新加载页面
const router = new Router({
    mode: 'history', // base: process.env.BASE_URL,
    // mode:'hash',// 打包app需要修改
    routes
})

// router拦截
router.beforeEach((to, from, next) => {
    var token = store.getters.getToken;
    //定义数组, 数组中存储需要 路由守卫 拦截的路径。
    const nextRoute = ['/category']
    //定义一个变量boolean，表示用户登录状态 true就表示登录，false表示没 有 注意：实际项目，需要请求Java服务器端

    if (nextRoute.indexOf(to.path) >= 0) {
        if (token.length === 0) {
            Message.error({
                message: "未登陆，请先登陆"
            })
            router.push('/login')
        }
    }
    next()
})

//暴露router供main.js全局调用
export default router
