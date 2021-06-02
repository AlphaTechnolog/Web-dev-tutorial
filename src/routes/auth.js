const router = require('express').Router();
const logged = require('../middlewares/logged');
const notLogged = require('../middlewares/notLogged');

router.get('/', notLogged, (req, res) => {
  res.status(200).render('login', { error: req.flash('error') });
});

router.get('/signup', notLogged, (req, res) => {
  res.status(200).render('signup', { error: req.flash('error') });
});

router.get('/logout', logged, (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
