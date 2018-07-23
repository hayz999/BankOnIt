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

router.get('/zipCode/:zipCode', (req, res) => {
  if (req.params.zipCode) {
    complaints.find({ 'zipCode': req.params.zipCode })
      .then(complaints => res.json(complaints))
  } else {
    res.json({ message: 'ZIP Code not found' })
  }
})

router.get('/state/:state', (req, res) => {
  const { limit, offset } = getQueryOptions(req.query)
  if(req.params.state) {
    complaints.find({'state': req.params.state}, {limit: limit, skip: offset})
      .then(complaints => res.json(complaints))
  } else {
    res.json({message: 'State not found'})
  }
})

router.get('/:state/:zipCode', (req,res) => {
  if(req.params.state && req.params.zipCode) {
    console.log(req.params.state, req.params.zipCode);
    complaints.find({ 'state': req.params.state, 'zipCode': req.params.zipCode})
      .then(complaints => res.json(complaints))
  } else {
    res.json({message: 'ZIP Code not found'})
  }
})

router.get('/state/product', (req, res) => {

});

// function toCamelCase(string) {
//   string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function (match) {
//     return match.charAt(match.length - 1).toUpperCase();
//   });
//   return string.charAt(0).toLowerCase() + string.substring(1);
// }

router.get('/:state/:company', (req, res) => {
  const { limit, offset } = getQueryOptions(req.query)
  const bank = (req.params.company).replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2").toUpperCase()
  
  if (req.params.state && req.params.company) {
    complaints.find({ 'state': req.params.state, 'company': bank }, { limit: limit, skip: offset })
      .then(complaints => res.json(complaints))
  } else {
    res.json({ message: 'State not found' })
  }
});



router.get('/zipcode/company', (req, res) => {

});

router.get('/zipcode/product', (req, res) => {

});

router.post('/', (req, res) => {
  
})

module.exports = router
