const { findUser } = require('../queries')
const { comparePasswords, generateJwtToken } = require('../utils')

module.exports = (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password) return res.status(422).send({ error: 'Both username and password are required to signin' })

  findUser({ username })
    .then(user => {
      comparePasswords(user.password, password)
        .then(resp => res.send(generateJwtToken(user)))
        .catch(err => res.status(422).send({ error: 'Either username or password is incorrect' }))
    })
}