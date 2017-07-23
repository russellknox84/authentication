module.exports = (db) => {

  const UserSchema = new db.Schema({
    username: {
      type: String,
      unique: true,
      lowercase: true
    },
    password: String
  })

  return db.model('User', UserSchema)

}