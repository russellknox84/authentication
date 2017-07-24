const bcrypt = require('bcryptjs')

module.exports = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return reject({ error: 'Error'})
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) return reject({ error: 'Error'})
        resolve(hash)
      });
    });
  })
}