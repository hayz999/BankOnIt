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


  