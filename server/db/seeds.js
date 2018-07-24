const { Complaints } = require('./models');
const { db } = require('./connection')
const data = require('../converter')

Promise.all([
  data,
  Complaints.remove({})
])
  .then((results) => {
    return Promise.all([
      Complaints.insert(results[0])
    ])
  })
  .then(() => db.close())
