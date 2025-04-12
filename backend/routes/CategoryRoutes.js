const express = require('express');
const router = express.Router();
const CategoryController = require ('../controller/CategoryController');
const upload = require('../middleware/upload'); // import multer middleware


router.get('/category', CategoryController.getCategory);
router.post('/createCategory', upload.single('Image_Category'), CategoryController.postCategory);



router.delete('/deleteCategory/:IDCategory', CategoryController.deleteCategory);


module.exports = router;
