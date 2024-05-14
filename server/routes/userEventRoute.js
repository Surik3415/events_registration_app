const express = require('express');
const router = express.Router();
const userEventController = require('../controllers/userEventController')

router.post('/event/:id/event_registration',userEventController.create)

module.exports = router

