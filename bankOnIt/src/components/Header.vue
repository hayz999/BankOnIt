<template>
<div>
  <div class='banner'>
  <img class='banner-img' src='../assets/banner.jpg' alt='banner' />
  <v-jumbotron color='white'  >
    <v-container class='info-container' fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-2">Bank more responsibly</h3>
          <span class="subheading">Using FDIC (Federal Deposit Insurance Corporation) consumer complaint data, BankOnIt aims to help you understand possible risks of certain banks. Risk is always a factor when trusting a company with your hard earned money. Minify that risk and feel more confident with your descisions. </span>
          <v-divider color="primary" class="my-3"></v-divider>
          
          <img class="logo" src='../assets/fdiclogo.png' alt='FDIC Logo' />
          
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  
  </div>
  <div class='search'>
    <v-btn class='search-button' 
            :to="{ name: 'Search' }" 
            large color="primary">
            Search Now!</v-btn>
  </div>
</div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>
  .info-container {
    display: flex;
    flex-direction: column;
    
  }

  .logo {
    height: 10vh;
    margin-left: 40%;
  }

  .banner {
    display: flex;
    flex-direction: row-reverse;
    
  }

  @media only screen and (max-width: 600px) {
    .banner {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 600px) {
    .banner-img {
      display: none;
    }
  }

  .banner-img {
    width: 40%;
    height: 400px;
    padding-left: 1rem;
    border-left: 4px solid #009688;
  }

  .search {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 4rem 0;
  }

  .search-button {
    width: 30%;
    height: 10vh;
    box-shadow: 3px 6px 10px gray;
  }

</style>
