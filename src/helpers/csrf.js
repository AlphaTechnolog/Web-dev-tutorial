const { tokens } = require('../storage');
const { v4: uuid } = require('uuid');

exports.newCsrf = (req) => {
  const token = uuid();
  const set = tokens.get(req.session.user._token);
  set.add(token);
  setTimeout(() => {
    set.delete(token);
  }, 30000);

  return token;
};

exports.registerUser = (user) => tokens.set(user._token, new Set());
