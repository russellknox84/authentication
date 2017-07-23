const { user } = require('../models')

module.exports = (query) => {
  const User = user(query)
  return User.save()
    .then(user => user)
    .catch(err => next(err))
}