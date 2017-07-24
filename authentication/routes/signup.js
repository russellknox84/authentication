const { findUser, saveUser } = require('../queries')
const { generateJwtToken, encryptAndSaltPassword } = require('../utils')

module.exports = (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password) return res.status(422).send({ error: 'Both username and password are required to signup' })

  encryptAndSaltPassword(password)
    .then(password => findUser({ username })
      .then(user => {
        if (user) return res.status(422).send({ error: 'Email is already in use' })
        return saveUser({ username, password })
      })
      .then(user => generateJwtToken(user))
      .then(jwt => res.send(jwt))
      .catch(err => res.status(422).send({ error: 'Something went wrong. Please try again' })))
}
