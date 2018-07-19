<template>
  <section>
    
    <Result v-for="(bank, index) in bankData" :key="index" :bank="bank" />
  </section>
</template>

<script>
import Result from './Result'

export default {
  props: ['bankData'],
  components: {
    Result
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 4rem;
  }
</style>
