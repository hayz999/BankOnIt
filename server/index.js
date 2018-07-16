const Converter = require("csvtojson").Converter;
const converter = new Converter({});
const csvFilePath = './complaints.csv'
const csv = require('csvtojson')

converter.fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  })

// Async / await usage
// const jsonArray = await csv().fromFile(csvFilePath);
