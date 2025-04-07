const express = require('express');
const router = express.Router();
const AdminController = require ('../controller/AdminController');

router.get('/', AdminController.getAdmin);

module.exports = router;
