const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    minlength: 8
  },
  password: {
    type: String,
    required: true,
    minlength: 7
  },
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel