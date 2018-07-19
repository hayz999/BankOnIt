<template>
  <section>
    <FilterResults />
    <Result v-for="(bank, index) in bankData" :key="index" :bank="bank" />
    <div  class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
    <NewSearch />
  </section>
</template>

<script>
import Result from './Result'
import NewSearch from './NewSearch';
import FilterResults from './FilterResults'

export default {
  props: ['bankData', 'getLimit'],
  components: {
    Result,
    NewSearch,
    FilterResults
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    propertyComputed () {
      console.log('I change when page changes');
      return this.page
    }
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 4rem;
  }
</style>
