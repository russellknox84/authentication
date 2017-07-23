const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

//app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
require('./routes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Listening on PORT', PORT))
