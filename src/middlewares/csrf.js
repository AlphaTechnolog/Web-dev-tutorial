const { tokens } = require('../storage');

module.exports = (req, res, next) => {
  if (!req.body.csrf || !tokens.get(req.session.user._token).has(req.body.csrf)) {
    return res.status(422).send('HTTP 422 | CSRF Token missing, invalid or expired');
  } else {
    next();
  }
};
