<template>
  <v-container  class='filter-container' fluid>
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
        v-model="zipCode"
        label="Zip Code"
      ></v-text-field>
    </div>
    <v-btn @click='narrowSearch' 
            class="primary">Filter</v-btn>
  </v-container>
  
</template>

<script>

export default {
  name: 'FilterResults',
  props: ['filterData', 'state'],
  data () {
      return {
        selected: '',
        name: '',
        zipCode: ''
      }
    },
  methods: {
    narrowSearch() {
      this.filterData(this.selected, this.name, this.zipCode)
    }
  }
}
</script>

<style scoped>
  .filter-container {
    width: 25vw;
  }

  @media only screen and (max-width: 600px) {
    .filter-container {
      width: 100%;
    }
  }
</style>


