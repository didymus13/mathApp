<template lang="html">
  <div>
    <progress class="progress"
              :class="{'is-danger': isFail, 'is-warning': isPass, 'is-success': isGreat}"
              :value="result.correct"
              :max="result.total">
      {{ percentCorrect }}%
    </progress>
    {{ result.correct }} / {{ result.total }}
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  computed: {
    ...mapState(['result']),
    ...mapGetters(['percentCorrect']),
    isFail() {
      return this.percentCorrect < 60;
    },
    isPass() {
      return this.percentCorrect >= 60 && this.percentCorrect < 80
    },
    isGreat() {
      return this.percentCorrect >= 80;
    }
  }
}
</script>
