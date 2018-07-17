const { Complaints } = require('./models');
const { db } = require('./connection')
const data = require('../index')

Promise.all([
  // Step #1, delete ALL from each collection
  data,
  Complaints.remove({})
])
  .then((results) => {
    return Promise.all([
      Complaints.insert(results[0])
    ])
  })
  .then(() => db.close())
