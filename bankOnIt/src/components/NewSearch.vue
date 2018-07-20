<template>
<v-layout row justify-center>
  <v-dialog v-model="dialog"  max-width="500px">
    
      
  <v-btn
        slot="activator"
        color="green"
        dark
        medium
        fixed
        bottom
        right
        fab>
    <v-icon>search</v-icon>
  </v-btn>
  <v-card>
    <v-card-title>
      <span class="headline">New Search</span>
    </v-card-title>
    <v-card-text>
    <v-flex xs12 sm12>
      <v-select
        :items="states"
        v-model="state"
        auto
        label="Select a State"
        hide-details
        single-line
      ></v-select>
    </v-flex> 
    <v-btn class="primary">Search</v-btn>
    </v-card-text>      
  </v-card> 
  </v-dialog>
</v-layout>
</template>
  

<script>
export default {
  name: 'NewSearch',
  data () {
    return {
      dialog: false,
      states: [
        'AL', 'AK', 'AZ','AR', 'CA', 'CO', 'CT','DE', 'DC','FL', 'GA', 'HI', 'ID','IL', 'IN', 'IA', 'KS', 'KY','LA', 'ME', 'MD','MA', 'MI', 'MN', 'MS','MO', 'MY', 'NE','NV','NH', 'NJ', 'NM', 'NY','NC', 'ND', 'OH','OK', 'OR', 'PA','RI', 'SC', 'SD', 'TN','TX', 'UT', 'VT', 'VA','WA', 'WV', 'WI', 'WY'
        ],
      valid: false,
      state: ''
    }
  }
}
</script>

