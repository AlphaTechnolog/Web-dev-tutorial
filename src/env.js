const dotenv = require('dotenv');

dotenv.config({
  path: '.env'
})

module.exports = (key, defVal = undefined) => process.env[key] || defVal;
