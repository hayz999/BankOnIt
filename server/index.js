const express = require('express')
const complaints = require('./db/routes')
const port = parseInt(process.env.PORT || 5000)
const bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res) => res.send('I work!'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use('/complaints', complaints)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port))