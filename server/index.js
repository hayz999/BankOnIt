//require the csvtojson converter class 
var Converter = require("csvtojson").Converter;
// create a new converter object
var converter = new Converter({});

// call the fromFile function which takes in the path to your 
// csv file as well as a callback function
converter.fromFile("./complaints.numbers", function (err, result) {
  // if an error has occured then handle it
  if (err) {
    console.log("An Error Has Occured");
    console.log(err);
  }
  // create a variable called json and store
  // the result of the conversion
  var json = result;

  // log our json to verify it has worked
  console.log(json);
});