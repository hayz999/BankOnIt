<template>
  <section>
    <Result v-for="(bank, index) in bankData" :key="index" :bank="bank" />
    <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
  </section>
</template>

<script>
import Result from './Result'

export default {
  props: ['bankData'],
  components: {
    Result
  },
  data () {
    page: 1
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 4rem;
  }
</style>
