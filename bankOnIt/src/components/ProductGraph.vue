<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="1500"
      scrollable="true">
      <v-btn
          slot="activator"
          color="primary"
          dark>
      Complaints by Product
      </v-btn>
      <v-card style="height: 100%; width: 100%;">
        <chartjs-horizontal-bar  :data='chartdata.datasets'
                      :labels="chartdata.labels"
                      :bind="true"
                      :datalabel="'Complaints'"
                      :height="100"
                      :backgroundcolor="'#E8F5E9'">
        </chartjs-horizontal-bar>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['productLabels', 'productDataset'],
  computed: {
    chartdata: function () {
      return {
        labels: this.productLabels,
        datasets: this.productDataset
      }
    }
  },
  data() {
    return {
      myoption:{
            responsive:false,
            maintainAspectRatio:true,
            title: {
                display: true,
                position: 'bottom',
                text: 'Complaints by Product'
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