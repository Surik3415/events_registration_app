const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAll)
router.get('/:id',eventController.show)
router.post('/',eventController.create)

module.exports = router
