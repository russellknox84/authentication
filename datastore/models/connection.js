const mongoose = require('mongoose')
const config = require('../../config')

mongoose.Promise = global.Promise;

mongoose.connect(config.mongodb.host, {
  useMongoClient: true,
})

module.exports = mongoose

