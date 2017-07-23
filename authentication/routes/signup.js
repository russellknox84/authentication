const { findUser, saveUser } = require('../queries')
const { generateJwtToken, encryptAndSaltPassword } = require('../utils')

module.exports = (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password) return res.status(422).send({ error: 'Both username and password are required to signup' })

  encryptAndSaltPassword(password)
    .then(password => findUser({ username })
      .then(user => {
        if (user) return res.status(422).send({ error: 'Email is already in use' })
        saveUser({ username, password })
          .then(user => res.send(generateJwtToken(user)))
      }))
      .catch(err => next(err))
}
