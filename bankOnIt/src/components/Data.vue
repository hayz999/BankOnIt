// button that user can click to bring up analysis popup (dialog in vuetify)

// charts.js for vue
  // number of complaints per product type (donut chart)
  // number of complaints per bank (bar chart)
  // analysis of issue? (word cloud maybe?)
  // complaints per month (area chart or line chart)
// need to do seperate fetch of data and reduce down to workable objects
  // key is product value is the number of occurances of that key
    // how to reduce data: 
        fetch is an array of objects
          data.reduce(object => {
            //loop through and create objects for a new key if it does not already exist
            //value is an accumulator 
          }, [])
    // How to get data out: 
      let dataArray = [{name: 'Mortgage', value: 20}, {name: 'Credit Card', value: 50}]

      let result = dataArray.map(item => item.name)
      let values = dataArray.map(value => value.value)
      console.log(result, values)
    // can then use these variables in the charts as data and lables 

  // key is company name value is number of occurances for that bank
  // key is the month value is the number of occurances 

<template>
<div>
  <h1>Hi</h1>
  <button @click="reduceByCompany">Reduce!</button>
  <button @click="reduceByProduct">Reduce!</button>
</div>
</template>

<script>
const stateUrl = 'https://bankonit.herokuapp.com/complaints/state/'




export default {
  name: 'Data',
  props: ['state'],
  data () {
    return {
      banks: ''
    }
  },
  mounted(){ 
    this.getByState()
  },
  methods: {
    getByState () {
      fetch(stateUrl + this.state)
      .then(response => response.json())
      .then(data => {
        this.banks = data
      })
    },
    reduceByCompany () {
      const companyResult = [...this.banks.reduce( (mp, o) => {
      if(!mp.has(o.company)) mp.set(o.company, Object.assign({count: 0}, o))
        mp.get(o.company).count++
        return mp
      }, new Map).values()]
      console.log(companyResult)
      return companyResult
    },
    reduceByProduct (bankArray) {
      const productResult = [...this.banks.reduce( (mp, o) => {
      if(!mp.has(o.product)) mp.set(o.product, Object.assign({count: 0}, o))
        mp.get(o.product).count++
        return mp
      }, new Map).values()]
      console.log(productResult)
      return productResult
    }
  }
}

</script>
  


  