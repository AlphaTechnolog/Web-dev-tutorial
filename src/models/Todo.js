const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('todos', new Schema({
  _id: Schema.Types.ObjectId,
  userId: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
  name: String,
  description: String,
  completed: Boolean,
}));
