const JWT = require('jsonwebtoken')
const { saveUuidAgainstUserId } = require('./redis')
const config = require('../../config')

module.exports = (token) => {
  return new Promise((resolve, reject) => {
    return JWT.verify(token, config.jwtSecretSign, (err, token) => {
      if (err) reject({ success: false })
      resolve({ success: true })
    })
  })
}
