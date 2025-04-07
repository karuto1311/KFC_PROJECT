const express = require('express');
const router = express.Router();
const HelloController = require ('../controller/HelloController');

router.get('/', HelloController.getHello);

module.exports = router;
