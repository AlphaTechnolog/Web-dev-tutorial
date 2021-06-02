const router = require('express').Router();

const apiAuthRouter = require('./api/auth');
const apiAppRouter = require('./api/app');

router.use(apiAuthRouter);
router.use('/app', apiAppRouter);

module.exports = router;
