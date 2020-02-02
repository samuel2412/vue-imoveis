import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imoveis: []
  },
  getters: {
    getImoveis: state => {
      return state.imoveis.filter(imovel =>
        imovel.publish && !(imovel.address.formattedAddress.includes('??'))
      )
    },
    getImovel: (state) => (payload) => {
      const index = state.imoveis.findIndex(imovel => imovel.id === payload.id)
      return state.imoveis[index]
    }
  },
  mutations: {
    imoveis: (state, payload) => {
      const res = payload.data
      res.sort(function (a, b) {
        return a.price - b.price
      })
      state.imoveis = res
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
