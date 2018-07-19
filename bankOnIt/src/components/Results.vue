<template>
  <section>
    <FilterResults />
    <Result v-for="(bank, index) in bankData" :key="index" :bank="bank" />
    <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="6"
      value="page"
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
  watch: {
    page: function updateData(page) {
      this.getLimit(page)
    }
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 4rem;
  }
</style>
