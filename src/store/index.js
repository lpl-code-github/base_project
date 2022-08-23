import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // 初始值
        token:""
    },
    actions: {
        setToken(state, param) {
            state.commit('setToken', param)
        }
    },
    mutations: {
        setToken(state, param) {
            state.token = param
        }
    },
    getters: {
        getToken(state){
            return state.token
        }
    },
    modules: {}
})
