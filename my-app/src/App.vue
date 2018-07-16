<template>
  <div id="app">
    <Header />
    <About />
    <Search />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Search
  }
}
</script>

<style>

</style>
