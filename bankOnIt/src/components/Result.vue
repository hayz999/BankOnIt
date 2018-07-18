<template>
  <v-container>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card :v-for='data in bankData' >
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{data.company}}</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>


export default {
  name: 'Result',
  props: {
    bankData: {
      type: Array
    }
  }
}
</script>
