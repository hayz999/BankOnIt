<template>
<div>
  <v-jumbotron class="primary">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <Search />
</div>
</template>

<script>
import Search from './Search'

export default {
  name: 'Header',
  components: {
    Search
  }
}
</script>

<style scoped>

</style>
