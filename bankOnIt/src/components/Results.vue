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
      <div class="results filter-results">
        <v-container fluid>
          <div class='filter-container'>
            <v-btn v-if='!show' class='filter-button' @click="showFilter">Show Filters</v-btn>
            <div v-if='show'>
              <h1>Filter Results</h1>
              <h3>Product type</h3>
              <v-checkbox v-model="selected" label="Mortgage" value="Mortgage"></v-checkbox>
              <v-checkbox v-model="selected" label="Credit Card" value="Credit Card"></v-checkbox>
              <v-checkbox v-model="selected" label="Loan" value="Loan"></v-checkbox>
              <v-checkbox v-model="selected" label="Checking / Savings" value="Checking / Savings"></v-checkbox>
              <v-checkbox v-model="selected" label="General" value="General"></v-checkbox>
              <h3>Filter by Bank</h3>
              <v-text-field
                v-model="name"
                label="Bank Name"
              ></v-text-field>
              <div v-if='this.state'>
                <h3>Filter by Zip Code</h3>
                <v-text-field
                  v-model="zipcode"
                  label="Zip Code"
                ></v-text-field>
              </div>
              <v-btn @click="filterByZip" class="primary">Filter</v-btn>
            </div>
          </div>
        </v-container>
      </div>
      <div v-if='state' class="results">
        <Result v-for="(bank, index) in pageData" :key="index" :bank="bank" />
      </div>
      <div v-if='zipCode' class="results">
        <Result v-for="(bank, index) in bankData" :key="index" :bank="bank" />
      </div>
    </div>
    <div v-if='state' class="text-xs-center">
      <v-pagination
          v-model="page"
          :length="15"
          :total-visible='5'
      ></v-pagination>
    </div>
    <NewSearch :updateState='this.updateState' />
  </section>
</template>

<script>
import Result from './Result'
import NewSearch from './NewSearch';

export default {
  props: ['bankData', 'loadPage', 'zipCode', 'state', 'getByState2', 'updateState', 'getByZipAndState'],
  components: {
    Result,
    NewSearch
  },
  data () {
    return {
      page: 1,
      selected: '',
      name: '',
      zipcode: '',
      show: false
    }
  },
  asyncComputed : {
    pageData: function() { 
      return this.loadPage(this.page)
    }
  },
  methods: {
    showFilter() {
      this.show = !this.show
    },
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
  }

  @media only screen and (max-width: 600px) {
    .filter-container {
      width: 100vw;
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

</style>
