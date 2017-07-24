const { updateUser, findUser } = require('../queries')
const { comparePasswords, generateJwtToken, encryptAndSaltPassword } = require('../utils')

module.exports = (req, res, next) => {
  const { username, password, newPassword } = req.body

  if (!username || !password || !newPassword) return res.status(422).send(
    { error: 'Both username and passwords are required to change password' })

  findUser({ username })
    .then(user => {
      comparePasswords(user.password, password)
        .then(resp => encryptAndSaltPassword(newPassword))
        .then(hash => updateUser(user._id, { password: hash }))
        .then(update => res.send({ update: 'Password updated'}))
        .catch(err => {
          console.log(err)
          return res.status(422).send({ error: 'Either username or password is incorrect' })
        })
    })

}