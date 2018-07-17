const uri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/testApp'
const db = require('monk')(uri.replace('mongodb://', ''))

db 
  .then(() => console.info('mongodb successfully connected:'))
  .catch(console.error.bind(console, 'mongodb connection error:'))

module.exports = {
  db: db,
  done: () => db.close(),
}