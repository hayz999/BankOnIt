<template>
<v-layout class='results ' >
  <v-flex >
    <v-card class='card-content'>
      <v-card-title primary-title >
        <i class="material-icons">account_balance</i>
        <h1 class="headline">{{bank.company}}</h1>
      </v-card-title>
      <v-divider color="primary" class="my-3"></v-divider>
      <div class='title-container'>
        <i class="material-icons">date_range</i>
        <h1>Date of Complaint</h1>
      </div>
      <h3>{{bank.dateReceived}}</h3>
      <div class='title-container'>
        <i class="material-icons">credit_card</i>
        <h1>Product</h1>
      </div>
      <h3>{{bank.product}} </h3>
      <h3>{{bank.subProduct}}</h3>
      <div class='title-container'>
        <i class="material-icons">assignment_late</i>
        <h1>Issue</h1>
      </div>
      <h3>{{bank.issue}} </h3>
      <h3>{{bank.subIssue}}</h3>
      <div class='title-container'>
        <i class="material-icons">mood_bad</i>
        <h1>Consumer Complaint</h1>
      </div>
      <h3 v-if='complaint' >{{bank.consumerComplaintNarrative}}</h3>
      <h3 v-else>No dialog provided</h3>
      <div class='title-container'>
        <i class="material-icons">check_box</i>
        <h1>Company provided resolution</h1>
      </div>
      <h3 v-if='responseToCustomer'>{{bank.companyResponseToConsumer}}</h3>
      <h3 v-else>No response</h3>
    </v-card>
    <!-- <v-progress-circular 
      :width="3"
      color="green"
      indeterminate
    ></v-progress-circular> -->
  </v-flex>
</v-layout>
</template>

<script>
export default {
  props: ['bank'],
  data () {
    return {
      complaint: this.bank.consumerComplaintNarrative,
      responseToCustomer: this.bank.companyResponseToConsumer
    }
  }
}
</script>

<style scoped>
  .results {
    margin: 1rem 0;
  }

  .card-content {
    padding: 1rem;
    max-width: 80%;
  }

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-left: .5rem;
    color: #00695C;
  }

  h3 {
    font-weight: 400;
    text-indent: 2.5rem;
    line-break: break;
  }

  .title-container {
    display: flex;
    flex-direction: row;
  }

</style>


