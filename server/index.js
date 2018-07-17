const Converter = require("csvtojson").Converter;
const converter = new Converter({});
const csvFilePath = './complaints.csv'

module.exports = converter.fromFile(csvFilePath)
  



// Async / await usage
// const jsonArray = await csv().fromFile(csvFilePath);
