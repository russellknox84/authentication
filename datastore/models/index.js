const connection = require('./connection')

module.exports = {
  user: require('./user')(connection)
}
