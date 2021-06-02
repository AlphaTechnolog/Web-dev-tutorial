const router = require("express").Router();
const logged = require('../../middlewares/logged');
const csrf = require('../../middlewares/csrf');
const existent = require('../../middlewares/existent');
const Todo = require('../../models/Todo');
const mongoose = require('mongoose');

router.post("/create", logged, csrf, async (req, res) => {
  const { name, description } = req.body;
  const { _id: userId } = req.session.user;
  const _id = mongoose.Types.ObjectId();
  const completed = false;
  await new Todo({
    _id,
    name,
    description,
    completed,
    userId
  }).save();
  return res.redirect('/app');
});

router.delete('/delete/:_id', logged, csrf, existent(Todo, '_id', (req, res, next) => {
  req.flash('error', 'Invalid todo selected');
  return res.redirect('/app');
}), async (req, res) => {
  const { _id } = req.params;
  await Todo.deleteMany({ _id });
  req.flash('success', 'Todo removed successfully');
  return res.redirect('/app');
});

router.post('/update/:_id', logged, csrf, existent(Todo, '_id', (req, res, next) => {
  req.flash('error', 'Invalid todo selected');
  return res.redirect('/app');
}), async (req, res) => {
  const { _id } = req.params;
  const { name, description } = req.body;
  const completed = !!req.body.completed;
  await Todo.updateMany({ _id }, { $set: {
    name,
    description,
    completed
  }});
  req.flash('success', 'Todo updated successfully');
  return res.redirect('/app');
});

module.exports = router;
