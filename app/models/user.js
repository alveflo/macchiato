var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: 'String',
  email: 'String'
});

module.exports = mongoose.model('users', usersSchema);
