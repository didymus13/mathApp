<template lang="html">
  <div id="addition">
    <h1 class="title">{{ $t('Addition') }}</h1>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        {{ this.problem.number1 }} + {{ this.problem.number2 }} =
      </div>
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <input type="number" name="answer" id="answer" class="input" v-model="answer" @keyup.enter="verify">
          </p>
          <p class="control">
            <button class="button is-primary" @click="verify">{{ $t('Answer') }}</button>
          </p>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <answer-result v-show="hasAnswers" />
    <progress-bar v-show="hasAnswers" />
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import ProgressBar from './ProgressBar';
import AnswerResult from './AnswerResult';

export default {
  components: {
    ProgressBar: ProgressBar,
    AnswerResult: AnswerResult
  },

  data() {
    return {
      answer: ''
    }
  },

  computed: {
    ...mapState(['problem', 'config', 'progress']),
    ...mapGetters(['hasAnswers', 'percentCorrect', 'isCorrect']),
    solution() {
      return this.problem.number1 + this.problem.number2;
    }
  },

  methods: {
    ...mapActions(['checkAnswer']),
    ...mapMutations(['setProblem']),
    createProblem() {
      let num1 = _.random(this.config.numberMin, this.config.numberMax);
      let num2 = _.random(this.config.numberMin, this.config.numberMax);
      this.problem.number1 = num1;
      this.problem.number2 = num2;
      if (this.config.useTotalForLimit && this.solution > this.config.numberMax) {
        this.createProblem(); // Recursive call
      }
    },
    verify() {
      this.checkAnswer({answer: this.answer, solution: this.solution});
      this.createProblem();
      this.resetForm();
    },
    resetForm() {
      this.answer = '';
    }
  },

  mounted() {
    this.createProblem();
  }
}
</script>
