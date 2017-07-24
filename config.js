module.exports = {
  mongodb: {
    host: process.env.mongodb_host || 'mongodb://localhost/authenication'
  },
  jwtSecretSign: 'secretkey1234'
}