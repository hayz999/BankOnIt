const express = require('express')
const router = express.Router()

const db = require('./connection').db
const complaints = db.get('complaints')

function getQueryOptions(query) {
  let { offset, limit } = query
    offset = parseInt(offset, null)
    limit = parseInt(limit, null)
    offset = offset > 2000 ? 2000 : offset
    limit = limit > 50 ? 50 : limit
  return { offset, limit }
}

router.get('/', (req, res) => {
  complaints.find()
    .then(complaints => res.json(complaints))
})

router.get('/state', (req, res) => {
  const { limit, offset } = getQueryOptions(req.query)
  if(req.query.state) {
    complaints.find({'state': req.query.state}, {limit: limit, skip: offset})
      .then(complaints => res.json(complaints))
  } else {
    res.json({message: 'State not found'})
  }
})

router.get('/state/zipcode', (req,res) => {
  
})

router.get('/zipcode', (req, res) => {
  if (req.query.zipCode) {
    complaints.find({ 'zipCode': req.query.zipCode })
      .then(complaints => res.json(complaints))
  } else {
    res.json({message: 'ZIP Code not found'})
  }
})

//this does not work!!
router.get('/company' , (req, res) => {
  if(req.query.company) {
    complaints.find({'company' : req.query.company})
      .then(complaints => res.json(complaints))
  } else {
    res.json({message: 'Company not found'})
  }
})

router.post('/', (req, res) => {
  
})

module.exports = router
