<template>
  <v-app dark>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import API from '@/lib/API'

export default {
  name: 'App',
  components: {
    Footer
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      API.getAllData()
    }
  }
}
</script>

<style>

</style>
