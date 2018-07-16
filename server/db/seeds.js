const monk = require('monk');
const ObjectId = (id) => monk.id(id);
const { Complaints } = require('./models');

const itemId = ObjectId()

const data = {
  complaints: []
}

Promise.all([
  // Step #1, delete ALL from each collection
  Complaints.remove({})
])
  .then(() => {
    return Promise.all([
      Complaints.insert(data.complaints)
    ])
  })