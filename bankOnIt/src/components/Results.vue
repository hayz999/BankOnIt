<template>
  <section>
    <h1 class='search-title' v-if='zipCode'>Complaints filed for Zip Code {{this.zipCode}}</h1>
    <h1 class='search-title' v-if='state'>Complaints filed for {{this.state}}</h1>
    <div class="results-container">
      <div class="results filter-results">
        <FilterResults />
      </div>
      <div class="results">
        <Result v-for="(bank, index) in bankData" :key="index" :bank="bank" />
      </div>
    </div>
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
  props: ['bankData', 'getLimit', 'zipCode', 'state'],
  components: {
    Result,
    NewSearch,
    FilterResults
  },
  data () {
    return {
      page: 1
    }
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 4rem;
  }

  .search-title {
    text-align: center;
    font-size: 3.5rem;
  }

  .results-container {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 600px) {
    .results-container {
    display: flex;
    flex-direction: column;
    }
  }

  .results {
    display: flex;
    flex-direction: column;
  }

  .filter-results {
    width: 50%;
    position: sticky; /* Fixed Sidebar (stay in place on scroll) */
    top: 20px; /* Stay at the top */
    
    overflow-x: hidden; 
  }
</style>
