<template>
  <div>
    <p>I am a child of search</p>
    <FilterResult />
  </div>
</template>

<script>
import FilterResult from './FilterResult.vue'

export default {
  name: 'Result',
  components: {
    FilterResult
  }
}
</script>

