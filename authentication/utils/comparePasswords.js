const bcrypt = require('bcryptjs')

module.exports = (encryptedPassword, providedPassword) => {
  return new Promise((resolve, reject) => {
    return bcrypt.compare(providedPassword, encryptedPassword)
      .then(success => {
        if (success) resolve()
        reject()
      })
  })
}


