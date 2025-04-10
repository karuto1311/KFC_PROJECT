const express = require('express');
const router = express.Router();
const AdminController = require ('../controller/AdminController');

router.get('/', AdminController.getAdmin);
router.post('/createAdmin', AdminController.postAdmin);


module.exports = router;
