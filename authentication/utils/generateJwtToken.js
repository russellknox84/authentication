const JWT = require('jsonwebtoken')
const { saveUuidAgainstUserId } = require('./redis')
const config = require('../../config')

module.exports = (user) => {
  return saveUuidAgainstUserId(user)
    .then(uuid => {
      return JWT.sign({
          sub: user,
          privateToken: uuid,
          accountTrusted: false,
          iat: new Date().getDate()
        },
        config.jwtSecretSign)
    })
}