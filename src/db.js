const mongoose = require('mongoose');
const env = require('./env');
const error = require('./error');

module.exports = async () => {
  if (!env('MONGO_URI')) {
    error("No MONGO_URI defined in `process.env` please set it or write it in `.env`");
  }

  await mongoose.connect(env('MONGO_URI'), {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    console.log("DB is connect");
  }).catch((err) => error(err.message));
}
