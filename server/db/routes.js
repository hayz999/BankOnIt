const express = require('express')
const router = express.Router()

const db = require('./connection').db
const complaints = db.get('complaints')

router.get('/', (req, res) => {
  complaints.find()
    .then(complaints => res.json(complaints))
})

router.get('/state', (req, res) => {
  if(req.query.state) {
    complaints.find({'state': req.query.state})
      .then(complaints => res.json(complaints))
  } else {
    res.json({message: 'State not found'})
  }
})

router.get('/zipcode', (req, res) => {
  if (req.query.zipCode) {
    complaints.find({ 'zipCode': req.query.zipCode })
      .then(complaints => res.json(complaints))
  } else {
    res.json({message: 'ZIP Code not found'})
  }
})

router.get('')

module.exports = router
