const router = require('express').Router();
const mongoose = require('mongoose');
const notLogged = require('../../middlewares/notLogged');
const User = require('../../models/User');
const { v4: uuid } = require('uuid');
const { registerUser } = require('../../helpers/csrf');

router.post('/login', notLogged, async (req, res) => {
  const { email, password } = req.body;
  const user = (await User.find({ email, password }).lean())[0];
  if (!user) {
    req.flash('error', 'Incorrect login');
    return res.redirect('/');
  }
  req.session.user = { ...user, _token: uuid() };
  registerUser(req.session.user);
  res.redirect('/app');
});

router.post('/signup', notLogged, async (req, res) => {
  const { name, email, password } = req.body;
  const user = (await User.find({ email }).lean())[0];
  if (user) {
    req.flash('error', 'The email is already taken');
    return res.redirect('/signup');
  }
  const _id = mongoose.Types.ObjectId();
  await new User({
    _id,
    name,
    email,
    password
  }).save();
  req.session.user = { _id, name, email, password, _token: uuid() };
  registerUser(req.session.user);
  res.redirect('/app');
});

module.exports = router;
