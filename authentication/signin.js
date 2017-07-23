const { findUser, saveUser } = require('./queries')

module.exports = (req, res, next) => {
  const { username, password } = req.body

  findUser({ username })
    .then(user => {
      if (user) return res.status(422).send({ error: 'Email is already in use' })
      saveUser({ username, password })
        .then(user => res.send(user))
    })
}
