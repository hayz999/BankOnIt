<template>
  <v-app dark>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>

</style>
