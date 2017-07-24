const { user } = require('../models')

module.exports = (id, updatedProperties) => {
  console.log(id, updatedProperties)
  return user.findById(id)
    .then(user => {

      const u = Object.assign(user,
        Object.assign({}, updatedProperties)
      ).save()

    })
    .catch(err => console.log(err))
}
