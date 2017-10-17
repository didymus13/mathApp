<template>
  <div id="config">
    <div class="field is-horizontal">
      <label for="minimum" class="label">Minimum</label>
      <div class="control">
        <input type="number" class="input" name="minimum" id="minimum" @input="updateMin" :value="config.numberMin">
      </div>
    </div>
    <div class="field is-horizontal">
      <label for="maximum" class="label">Maximum</label>
      <div class="control">
        <input type="number" class="input" name="maximum" id="maximum" @input="updateMax" :value="config.numberMax">
      </div>
    </div>

    <div class="field">
      <input type="checkbox" name="useTotalForLimit" id="useTotalForLimit" class="switch" v-model="config.useTotalForLimit">
      <label for="useTotalForLimit">useTotalForLimit</label>
    </div>

    <div class="field">
      <input type="checkbox" name="wholeAnswersOnly" id="wholeAnswersOnly" class="switch" v-model="config.wholeAnswersOnly">
      <label for="wholeAnswersOnly">wholeAnswersOnly</label>
    </div>

    <div class="field">
      <input type="checkbox" name="positiveAnswersOnly" id="positiveAnswersOnly" class="switch" v-model="config.positiveAnswersOnly">
      <label for="positiveAnswersOnly">positiveAnswersOnly</label>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "config",
  data: () => ({

  }),
  computed: {
    ...mapState({
        config: state => state.config
    }),
    ...mapGetters(['isConfigValid'])
  },
  methods: {
    updateMin(e) {
      this.$store.commit('updateMin', e.target.value);
    },
    updateMax(e) {
      this.$store.commit('updateMax', e.target.value);
    }
  }
}
</script>
