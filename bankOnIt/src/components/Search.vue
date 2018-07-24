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
  <div class="info-container" v-if='showSearch'>
    <v-divider color="primary" class="my-3"></v-divider>
    <h2>Find data on all of the popular banks shown below:</h2>
    <div class='logo-container'>
      <img src='../assets/logos/1stbank.jpg' alt='logo'/>
      <img src='../assets/logos/bofa.png' alt='logo'/>
      <img src='../assets/logos/capital1.png' alt='logo'/>
      <img src='../assets/logos/experian.png' alt='logo'/>
      <img src='../assets/logos/wells_fargo.png' alt='logo'/>
    </div>
    <div class='logo-container'>
      <img src='../assets/logos/nation.png' alt='logo'/>
      <img src='../assets/logos/PNClogo.png' alt='logo'/>
      <img src='../assets/logos/regions.png' alt='logo'/>
      <img src='../assets/logos/jp.png' alt='logo'/>
    </div>
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
    margin-right: 15rem;
    margin-left: 15rem;
    margin-top: 2rem;
    background-color: white;
    box-shadow: 2px 2px 8px gray;
  }

  img {
    width: 10%;
    height: auto;
    margin-bottom: 1rem;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem;
    text-align: center;
    
  }

  @media only screen and (max-width: 600px) {
    .info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      margin-top: 4rem;
      text-align: center;
    }
    img {
      width: 15%;
      height: auto;
    }
    .search-container {
      margin-right: 1rem;
      margin-left: 1rem;
      margin-top: 2rem;
      background-color: white;
      box-shadow: 2px 2px 8px gray;
    }
  }
</style>


