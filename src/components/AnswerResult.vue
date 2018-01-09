<template lang="html">
    <span :class="{'has-text-success': isCorrect, 'has-text-danger': !isCorrect}">
      <span class="fas fa-10x" :class="{'fa-thumbs-up': isCorrect, 'fa-thumbs-down': !isCorrect}"></span>
    </span>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['isCorrect']),
  }
}
</script>

<style lang="css">
</style>
