import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    cardnamesearch:'',
    dataId:{},

  },
  getters: {
    sendData(state){
      return state.data;
    },

    sendDataId(state){
      return state.dataId;
    }
  },
  
  mutations: {
    ApiCall(state, payload){
      state.data = payload;      
    },
    ApiCallId(state,payload){
      state.dataId = payload;
    }
  },

  actions: {
    ApiCall(context, payload) {
      context.commit('ApiCall', payload)
    },
    ApiCallId(context,payload){
      context.commit('ApiCallId', payload)
    }
  },

  modules: {

  }
})
