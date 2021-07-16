import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    cardnamesearch:'',

  },
  getters: {
    sendData(state){
      return state.data;
    }
  },
  
  mutations: {
    ApiCall(state, payload){
      state.data = payload;      
    }
  },

  actions: {
    ApiCall(context, payload) {
      context.commit('ApiCall', payload)
    }
  },

  modules: {

  }
})
