import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    progress: {
      correct: 0,
      total: 0,
    },
    problem: {
      number1: 0,
      number2: 0,
    },
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
    },
    percentCorrect: (state, getters) => {
      if (!getters.hasAnswers) {
        return 0;
      }
      let percent = state.progress.correct / state.progress.total * 100;
      return Math.round(percent);
    },
    hasAnswers: state => {
      return state.progress.total > 0;
    }
  },

  actions: {
    checkAnswer: ({commit}, payload) => {
      let answer = parseInt(payload.answer);
      if (answer == payload.solution) {
        commit('incrementCorrect');
      }
      commit('incrementTotal');
    }
  },

  mutations: {
    updateMin(state, value) {
      state.config.numberMin = parseInt(value);
    },
    updateMax(state, value) {
      state.config.numberMax = parseInt(value);
    },
    setProblem(state, value) {
      state.problem = problem;
    },
    incrementCorrect(state) {
      state.progress.correct++;
    },
    incrementTotal(state) {
      state.progress.total++;
    }
  }
})
