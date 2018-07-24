<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="2000"
      scrollable="true">
      <v-btn
          slot="activator"
          color="primary"
          dark>
      Complaints per Bank
      </v-btn>
      <v-card style="height: 100%; width: 100%;">
        <chartjs-horizontal-bar  :data='chartdata.datasets'
                                  :labels="chartdata.labels"
                                  :bind="true"
                                  :datalabel="'Complaints'"
                                  :height="400"
                                  :backgroundcolor="'#E8F5E9'">
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



