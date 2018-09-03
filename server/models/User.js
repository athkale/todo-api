const mongoose = require('mongoose')

let user = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
});

module.exports = {user};