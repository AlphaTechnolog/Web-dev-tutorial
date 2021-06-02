const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('users', new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
}))
