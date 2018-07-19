<template>
  <v-container fluid>
    <h2>Product type</h2>
    <v-checkbox v-model="selected" label="Mortgage" value="Mortgage"></v-checkbox>
    <v-checkbox v-model="selected" label="Credit Card" value="Credit Card"></v-checkbox>
    <v-checkbox v-model="selected" label="Loan" value="Loan"></v-checkbox>
    <v-checkbox v-model="selected" label="Checking / Savings" value="Checking / Savings"></v-checkbox>
  </v-container>
</template>

<script>
export default {
  name: 'FilterResults',
  data () {
      return {
        selected: ['']
      }
    }
}
</script>

