import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isColor: "#5c90dc",
    isJumap:false,
    user_name:'',
    user_type:'',
  },
  mutations: {
    edit(state, payload) {
      state.isColor = payload
    },
    hdJumap(state, payload){
      state.isJumap = payload
    },
    login(state, payload){
      state.user_name = payload.user_name
      state.user_type = payload.user_type
    },
    unLogin(state){
      state.user_name = ''
      state.user_type = ''
    },
  },
  actions: {
  },
  modules: {
  }
})
