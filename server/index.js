const Converter = require("csvtojson").Converter;
const converter = new Converter({});
const csvFilePath = './complaints.csv'


converter.fromFile(csvFilePath)
  .then((jsonObj) => {
    return jsonObj
  })

// Async / await usage
// const jsonArray = await csv().fromFile(csvFilePath);
