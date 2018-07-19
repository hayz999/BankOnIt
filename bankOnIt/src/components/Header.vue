<template>
<div>
  <v-jumbotron color="white">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-2">Bank more responsibly</h3>
          <span class="subheading">Using FDIC (Federal Deposit Insurance Corporation) consumer complaint data, BankOnIt aims to help you understand possible risks of certain banks. Risk is always a factor when trusting a company with your hard earned money. Minify that risk and feel more confident with your descisions. </span>
          <v-divider color="primary" class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <v-btn :to="{ name: 'Search' }" depressed large color="primary">New Search</v-btn>
</div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
