const redis = require('redis')
const client = redis.createClient()
const uuid = require('uuid/v4')

client.on("error", (err) => console.log("Error " + err))

const saveUuidAgainstUserId = (userId) => {
  const id = uuid()
  return new Promise((resolve, reject) => {
    client.set(userId._id.toString(), id)
    return resolve(id)
  })
}

const authroiseJwtTokenAgainstUser = (userId) => {
  client.get(userId, (err, uuid) => uuid)
}

module.exports = {
  saveUuidAgainstUserId,
  authroiseJwtTokenAgainstUser
}

