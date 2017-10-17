import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: {
      numberMin: 1,
      numberMax: 12,
      useTotalForLimit: true,
      wholeAnswersOnly: true,
      positiveAnswersOnly: true
    }
  },
  getters: {
    isConfigValid: state => {
      return state.config.numberMin <= state.config.numberMax;
    }
  },
  actions: {

  },
  mutations: {
    updateMin(state, value) {
      state.config.numberMin = parseInt(value);
    },
    updateMax(state, value) {
      state.config.numberMax = parseInt(value);
    }
  }
})
