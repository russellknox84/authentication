const { user } = require('../models')

module.exports = (query) => {
  return user.findOne(query)
    .then(data => data)
    .catch(err => next(err))
}