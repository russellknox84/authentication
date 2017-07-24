const { verifyJwtToken } = require('../utils')

module.exports = (req) =>
  new Promise((resolve, reject) => {

    const jwtToken = req.headers['authorisation']

    if (!jwtToken) reject({ error: 'No token' })

    verifyJwtToken(jwtToken)
      .then(success => resolve(success))
      .catch(err => reject(err))
  })




