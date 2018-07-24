<template>
  <section>
    <h1 class='search-title' v-if='zipCode'>
      Complaints filed for Zip Code {{this.zipCode}}
      <v-tooltip bottom>
        <i slot="activator" class="material-icons">info</i>
        <span>Please note sensitive information like important numbers and names have been replaced with 'XXXX'.</span>
      </v-tooltip>
    </h1>
    <h1 class='search-title' v-if='state'>
      Complaints filed for {{this.state}}
      <v-tooltip bottom>
        <i slot="activator" class="material-icons">info</i>
        <span>Please note sensitive information like important numbers and names have been replaced with 'XXXX'.</span>
      </v-tooltip>
    </h1>
    <div class="results-container">
      <div v-if='state' >
        <Data class="filter-container" :state='this.state'/>
      </div>
      <div v-if='state' class="results">
        <Result v-for="(bank, index) in pageData" :key="index" :bank="bank" />
      </div>
      <div v-if='zipCode' class="zip-results">
        <Result v-for="(bank, index) in bankData" :key="index" :bank="bank" />
      </div>
    </div>
    <div v-if='state' class="text-xs-center">
      <v-pagination
          v-model="page"
          :length="30"
          :total-visible='5'
      ></v-pagination>
    </div>
    <NewSearch :updateState='this.updateState' />
  </section>
</template>

<script>
import Result from './Result'
import NewSearch from './NewSearch';
import Data from './Data'

export default {
  props: ['bankData', 'loadPage', 'zipCode', 'state', 'getByState2', 'updateState', 'getByZipAndState'],
  components: {
    Result,
    NewSearch,
    Data
  },
  data () {
    return {
      page: 1,
      selected: '',
      name: '',
      zipcode: '',
      
    }
  },
  asyncComputed : {
    pageData: function() { 
      return this.loadPage(this.page)
    }
  },
  methods: {
    filterByZip() {
      this.getByZipAndState(this.pageData, this.zipcode)
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
    .filter-container {
      width: 94vw !important;
    }
  }

  .results {
    display: flex;
    flex-direction: column;
  }

  .filter-container {
    width: 25vw;
    position: sticky;
    top: 10px;
  }

  .zip-results {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
  }

</style>
