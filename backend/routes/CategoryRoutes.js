const express = require('express');
const router = express.Router();
const CategoryController = require ('../controller/CategoryController');
const upload = require('../middleware/upload'); // import multer middleware


router.get('/category', CategoryController.getCategory);
router.post('/createCategory', upload.single('Image_Category'), CategoryController.postCategory);
router.put('/updateCategory/:IDCategory', upload.single('Image_Category'), CategoryController.putCategory);



router.delete('/deleteCategory/:IDCategory', CategoryController.deleteCategory);
router.get('/getCategory/:IDCategory', CategoryController.detailCategory);



module.exports = router;
