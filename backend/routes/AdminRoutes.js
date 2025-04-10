const express = require('express');
const router = express.Router();
const AdminController = require ('../controller/AdminController');

router.get('/', AdminController.getAdmin);
router.post('/createAdmin', AdminController.postAdmin);
router.put('//updateAdmin/:IDAdmin', AdminController.putAdmin);


module.exports = router;
