<template>
<div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="1500"
    >
    <v-btn
        slot="activator"
        color="primary"
        dark
      >
        Complaints per Bank
      </v-btn>
      <v-card>
  <chartjs-horizontal-bar  :data='chartdata.datasets'
                :labels="chartdata.labels"
                :bind="true"
                :datalabel="'Complaints'">
  </chartjs-horizontal-bar>
  
  </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  props: ['companyLabels', 'companyDataset'],
  computed: {
    chartdata: function () {
      return {
        labels: this.companyLabels,
        datasets: this.companyDataset
      }
    }
  },
  data() {
    return {
      myoption:{
            responsive:true,
            maintainAspectRatio:true,
            title: {
                display: true,
                position: 'bottom',
                text: 'Complaints per bank'
            },
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        },
        dialog: false
    }
  }
}
</script>



