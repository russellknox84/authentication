const { verifyJwtToken } = require('../utils')
const { validateJwtToken } = require('../services')

module.exports = (req, res, next) => {
  return validateJwtToken(req)
    .then(success => res.send(success))
    .catch(err => res.status(422).send({ error: 'Authentication error' }))
}