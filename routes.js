const authenication = require('./authentication')

module.exports = (app) => {
  app.post('/signup', authenication.signup)
  app.post('/signin', authenication.signin)
  app.post('/update_password', authenication.updatePassword)
}