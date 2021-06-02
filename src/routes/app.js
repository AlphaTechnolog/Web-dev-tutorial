const router = require('express').Router();
const logged = require('../middlewares/logged');
const existent = require('../middlewares/existent');
const Todo = require('../models/Todo');
const mongoose = require('mongoose');
const { newCsrf } = require('../helpers/csrf');

router.get('/', logged, async (req, res) => {
  const todos = await Todo.find({
    userId: mongoose.Types.ObjectId(req.session.user._id),
  }).lean();

  res.status(200).render('app/home', {
    user: req.session.user,
    todos,
    token: newCsrf(req),
    error: req.flash('error'),
    success: req.flash('success'),
  });
});

router.get('/create', logged, (req, res) => {
  res.status(200).render('app/create', {
    error: req.flash('error'),
    user: req.session.user,
    token: newCsrf(req),
  });
});

router.get('/update/:_id', logged, existent(Todo, '_id', (req, res, next) => {
  req.flash('error', 'Invalid todo selected');
  return res.redirect('/app');
}), async (req, res) => {
  const { _id } = req.params;
  const todo = (await Todo.find({ _id }).lean())[0];
  return res.status(200).render('app/update', {
    user: req.session.user,
    token: newCsrf(req),
    todo,
  });
});

module.exports = router;
