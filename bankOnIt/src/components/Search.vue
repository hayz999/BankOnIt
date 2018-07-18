<template>
<div>
  <v-btn @click="showSearch = !showSearch">New Search</v-btn>
  <section v-if="showSearch">
    <v-container fluid>
      <v-layout row wrap align-center>
        <v-select
          :items="states"
          auto
          label="Select a State"
          hide-details
          single-line>
        </v-select>
      </v-layout>
      <h3>OR</h3>
      <v-form v-model="valid">
        <v-text-field
          v-model="name"
          :rules="zipCodeRules"
          :counter="6"
          label="Enter Zip Code"
          required>
        </v-text-field>
      </v-form>
      <v-btn :to="{ name: 'Result' }" depressed large color="primary">Search</v-btn>
    </v-container>
  </section>
</div>
</template>

<script>

export default {
  name: 'Search',
  data () {
      return {
        states: [
          'AL', 'AK', 'AZ','AR', 'CA', 'CO', 'CT','DE', 'DC','FL', 'GA', 'HI', 'ID','IL', 'IN', 'IA', 'KS', 'KY','LA', 'ME', 'MD','MA', 'MI', 'MN', 'MS','MO', 'MY', 'NE', 'NV','NH', 'NJ', 'NM', 'NY','NC', 'ND', 'OH','OK', 'OR', 'PA','RI', 'SC', 'SD', 'TN','TX', 'UT', 'VT', 'VA','WA', 'WV', 'WI', 'WY'
        ],
        valid: false,
        name: '',
        zipCodeRules: [
          v => v.length <= 10 || 'Zip Code must be less than 6 characters'
        ],
        showSearch: false,
        bankData: []
      }
    }
}
</script>

