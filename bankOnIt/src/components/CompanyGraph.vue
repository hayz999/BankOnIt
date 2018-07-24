<template>
<div>
  <chartjs-bar></chartjs-bar>
  <v-btn @click="getLabels">Click</v-btn>
  </div>
</template>

<script>
export default {
  props: ['companyData'],
  data () {
    return {
      labels: [],
      dataset: []
    }
  },
  methods: {
    getLabels (){
      this.companyData.forEach(company => {
        return this.labels.push(company.company)
      });
    }
  }
}
</script>



