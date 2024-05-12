const express = require('express');
const router = express.Router();
const userEventController = require('../controllers/userEventController')

router.post('/event/:id/user_event', userEventController.create)

module.exports = router

