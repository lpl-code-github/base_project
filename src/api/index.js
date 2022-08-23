// 引入axios
import axios from 'axios'
// 引入element的Message提示组件
import {
    Message
} from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store/index'
//axios打开允许跨域携带cookie信息
axios.defaults.withCredentials = true

// 引入封装好的接口模块
import * as request from './request.js'


// 请求超时时间
axios.defaults.timeout = 100000

// 代理接口
const service = axios.create({
    baseURL: '/apis'
})

// 请求拦截器(在请求之前进行一些配置)
service.interceptors.request.use(
    config => {
        // 从vuex获取token
        var token = store.getters.getToken;
        // 如果存在请求头 则请求时携带请求头
        if (config.url !== "/login" ){
            if (token.length === 0){
                return config
            }
            config.headers['Authorization'] = token
        }

        // 如果请求是post请求,请求信息为文件格式
        // if (config.method === 'put' || config.method === 'post') {
        //     config.headers['Content-Type'] = 'multipart/form-data'
        // }

        // 加载顶部loading
        NProgress.start()

        return config
    },
    err => {
        // Promise.reject()方法返回一个带有拒绝原因的Promise对象
        return Promise.reject(err)
    }
)

// 响应拦截器(响应之后对数据做一些处理)
service.interceptors.response.use(
    response => {
        // 关闭顶部loading
        NProgress.done()

        // 如果响应体中的success为false
        // if (!res.success) {
        // 	// 使用element ui的错误提示 显示res中的message
        // 	Message.error({
        // 		message: res.message
        // 	})
        // 	return
        // }
        // Message.success({
        //     message: "请求成功"
        // })

        // 返回响应体
        return response
    },
    error => {
        // const { data } = error.response
        // 关闭顶部loading
        NProgress.done()
        // 请求超时
        if (error.message.indexOf('timeout') !== -1) {
            Message.error({
                message: '请求超时，请稍后再试'
            })
        }
        return error
    }
)

export {
    request,
    service
}
