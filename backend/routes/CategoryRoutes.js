const express = require('express');
const router = express.Router();
const CategoryController = require ('../controller/CategoryController');

router.get('/category', CategoryController.getCategory);


router.delete('/deleteCategory/:IDCategory', CategoryController.deleteCategory);


module.exports = router;
