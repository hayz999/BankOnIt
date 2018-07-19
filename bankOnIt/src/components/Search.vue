<template>
<div>
  <section>
    <v-container fluid class="secondary">
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
      <v-btn v-if='zipCode != null' @click='getByZip' >Search</v-btn>
      <v-btn v-if='state != null' @click='getByState' >Search</v-btn>
    </v-container>
  </section>
  <Results :bankData='bankData'/>
</div>
</template>

<script>
const zipUrl = 'https://bankonit.herokuapp.com/complaints/zipcode?zipCode='
const stateUrl = 'https://bankonit.herokuapp.com/complaints/state?state='

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
      zipCode: null,
      state: null,
      zipCodeRules: [
        v => v.length <= 10 || 'Zip Code must be less than 6 characters'
      ],
      bankData: []
    }
  },
  methods: {
    getByZip () {
      fetch(zipUrl + this.zipCode)
      .then(response => response.json())
      .then(data => {
        this.bankData = data
      })
    },
    getByState () {
      fetch(stateUrl + this.state)
      .then(response => response.json())
      .then(data => {
        this.bankData = data
      })
    }
  }
}
</script>

