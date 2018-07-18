<template>
  <v-app >
    <main-header></main-header>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: {
    Footer,
    MainHeader
  }
  
}
</script>

<style>

</style>
