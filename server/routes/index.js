const express = require('express');
const router = express.Router();
const eventRouter = require('./eventRouter');
const userEventRouter = require('./userEventRoute');


router.use('/', userEventRouter);
router.use('/event', eventRouter);

module.exports = router;
