import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imoveis: []
  },
  getters: {
    getImoveis: state => {
      return state.imoveis
    }
  },
  mutations: {
    imoveis: (state, payload) => {
      state.imoveis = payload.data
    }
  },
  actions: {
    setImoveis: ({ commit }, payload) => {
      commit('imoveis', payload)
    }
  },
  modules: {
  }
})
