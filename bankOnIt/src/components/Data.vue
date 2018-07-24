<template>
<div>
  <CompanyGraph :companyLabels='companyLabels'
                :companyDataset='companyDataset' />
  <ProductGraph :productLabels='productLabels'
                :productDataset='productDataset' />
</div>
</template>

<script>
const stateUrl = 'https://bankonit.herokuapp.com/complaints/state/'
import CompanyGraph from './CompanyGraph'
import ProductGraph from './ProductGraph'

export default {
  name: 'Data',
  props: ['state'],
  components: {
    CompanyGraph,
    ProductGraph
  },
  data () {
    return {
      banks: [],
      companyData: [],
      productData: [],
      companyLabels: [],
      companyDataset: [],
      productLabels: [],
      productDataset: []
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
        this.reduceByCompany()
        this.reduceByProduct()
        this.getLabelsAndDataByCompany()
        this.getLabelsAndDataByProduct()
      })
    },
    reduceByCompany () {
      const companyResult = [...this.banks.reduce( (mp, o) => {
      if(!mp.has(o.company)) mp.set(o.company, Object.assign({count: 0}, o))
        mp.get(o.company).count++
        return mp
      }, new Map).values()]
      this.companyData= companyResult.filter(result => result.count >= 5)
      return companyResult.filter(result => result.count >= 5)
    },
    reduceByProduct (bankArray) {
      const productResult = [...this.banks.reduce( (mp, o) => {
      if(!mp.has(o.product)) mp.set(o.product, Object.assign({count: 0}, o))
        mp.get(o.product).count++
        return mp
      }, new Map).values()]
      this.productData= productResult.filter(result => result.count >= 5)
      return productResult.filter(result => result.count >= 5)
    },
    getLabelsAndDataByCompany() {
      this.companyLabels = this.companyData.map(company => company.company)
      this.companyDataset = this.companyData.map(company => company.count)
    },
    getLabelsAndDataByProduct() {
      this.productLabels = this.productData.map(product => product.product)
      this.productDataset = this.productData.map(product => product.count)
    }
  },
  beforeDestroy() {
    this.banks = null
    this.companyData = null
    this.productData = null
    this.companyLabels = null
    this.companyDataset = null
    this.productLabels = null
    this.productDataset = null
  }
}

</script>
  


  