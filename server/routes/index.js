const express = require('express');
const router = express.Router();
const eventRouter = require('./eventRouter');
const UserEventRouter = require('./userEventRoute');


router.use('/', UserEventRouter);
router.use('/event', eventRouter);

module.exports = router;
