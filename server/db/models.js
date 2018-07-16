const { db } = require('./connection')

module.exports = {
  Complaints: db.get('complaints')
}