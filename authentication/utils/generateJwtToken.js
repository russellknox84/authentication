const JWT = require('jsonwebtoken')
const uuid = require('uuid/v4')

module.exports = (user) => {

  // const saveUuidAgainstUserId = (userId) => {
  //   //use Redis to save
  //   const id = uuid()
  //   return new Promise((resolve, reject) => {
  //     return resolve(id)
  //   })
  // }
  // return saveUuidAgainstUserId()
  //   .then(uuid => JWT.sign({
  //     sub: user,
  //     accountTrusted: false,
  //     iat: new Date().getDate() },
  //   //use uuid as unique hash once Redis is connected
  //   'sdjfbjksdf'))

  return JWT.sign({
        sub: user,
        accountTrusted: false,
        iat: new Date().getDate() },
      //use uuid as unique hash once Redis is connected
      'sdjfbjksdf')

}