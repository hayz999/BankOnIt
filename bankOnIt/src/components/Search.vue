<template>
<div>
  <section class='search-container' v-if='showSearch'>
    <v-container fluid >
      <v-layout row wrap align-center>
        <v-select
          :items="states"
          v-model="state"
          auto
          label="Select a State"
          hide-details
          single-line>
        </v-select>
      </v-layout>
      <h2>OR</h2>
      <v-form v-model="valid">
        <v-text-field
          v-model="zipCode"
          :rules="zipCodeRules"
          :counter="6"
          label="Enter Zip Code"
          required>
        </v-text-field>
      </v-form>
      <v-btn v-if='zipCode != ""' @click='getByZip' >Search</v-btn>
      <v-btn v-if='state != null' @click.stop.prevent='handleStateSearch' >Search</v-btn>
    </v-container>
  </section>
  <div v-if='showResult'>
    <Results  :bankData='bankData'
              :loadPage='loadPage'
              :zipCode='zipCode'
              :state='state'
              :getByState2='getByState2'
              :updateState='updateState'
              :getByZipAndState='getByZipAndState'/>
              
  </div>
</div>
</template>

<script>
const stateUrl = 'https://bankonit.herokuapp.com/complaints/state/'
const zipUrl = 'https://bankonit.herokuapp.com/complaints/zipCode/'

import Results from './Results';

export default {
  name: 'Search',
  components: {
    Results
  },
  data () {
    return {
      states: [
        'AL', 'AK', 'AZ','AR', 'CA', 'CO', 'CT','DE', 'DC','FL', 'GA', 'HI', 'ID','IL', 'IN', 'IA', 'KS', 'KY','LA', 'ME', 'MD','MA', 'MI', 'MN', 'MS','MO', 'MY', 'NE','NV','NH', 'NJ', 'NM', 'NY','NC', 'ND', 'OH','OK', 'OR', 'PA','RI', 'SC', 'SD', 'TN','TX', 'UT', 'VT', 'VA','WA', 'WV', 'WI', 'WY'
        ],
      valid: false,
      zipCode: "",
      state: null,
      zipCodeRules: [
        v => v.length <= 10 || 'Zip Code must be less than 6 characters'
      ],
      bankData: [],
      sL: '?limit=',
      oS: '&offset=',
      limit: 10,
      offset: 0,
      showSearch: true,
      showResult: false
    }
  },
  methods: {
    handleStateSearch () {
      this.getByState()
    }, 
    getByZip () {
      fetch(zipUrl + this.zipCode)
      .then(response => response.json())
      .then(console.log(url + this.zipCode)
      )
      .then(data => {
        this.bankData = data
      })
      this.showSearch = !this.showSearch
      this.showResult = !this.showResult
    },
    getByState () {
      fetch(stateUrl + this.state + this.sL + this.limit + this.oS + this.offset )
      .then(response => response.json())
      .then(data => {
        this.bankData = data
        this.showSearch = !this.showSearch
        this.showResult = !this.showResult
        return data
      })
    },
    getByState2 (newOffset) {
      return fetch(stateUrl + this.state + this.sL + this.limit + this.oS + newOffset)
      .then(response => response.json())
      .then(data => {
        return data
      })
    },
    getByZipAndState(pageData, zipcode){
      fetch(url + this.state + '/' + zipcode)
      .then(response => response.json())
      .then(result => {
        pageData = result
      })
    },
    loadPage(page) {
      let newOffset = this.limit * (page - 1)
      window.scrollTo(0, 0)
      return this.getByState2(newOffset)
    },
    updateState (state) {
      this.state = state
      this.zipCode = '' 
      this.handleStateSearch(this.state)
      this.showSearch = !this.showSearch
      this.showResult = !this.showResult
    }
  }
}
</script>

<style scoped>
  .search-container {
    margin-right: 5rem;
    margin-left: 5rem;
    margin-top: 2rem;
    background-color: white;
    box-shadow: 3px 6px 50px gray;
  }
</style>


