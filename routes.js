const {
  signup,
  signin,
  updatePassword,
  authenticate
} = require('./authentication')

module.exports = (app) => {
  app.post('/signup', signup)
  app.post('/signin', signin)
  app.post('/update_password', updatePassword)
  app.get('/authenticate', authenticate)
}