<template>
  <div>
    <v-btn>Click Me!</v-btn>
    <Result />
    <Data />
    <NewSearch />
  </div>
</template>

<script>
import Result from './Result.vue'
import Data from './Data.vue'
import NewSearch from './NewSearch.vue'

export default {
  name: 'Search',
  components: {
    Result,
    Data,
    NewSearch
  }
}
</script>

<style scoped>

</style>


