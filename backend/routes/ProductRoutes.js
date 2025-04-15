const express = require('express');
const router = express.Router();
const ProductController = require ('../controller/ProductController');
const upload = require('../middleware/upload'); // import multer middleware


router.get('/product', ProductController.getProduct);
router.post('/createProduct', upload.single('ImagePro'), ProductController.postProduct);

router.put('/updateProduct/:IDProduct', upload.single('ImagePro'), ProductController.putProduct);


router.delete('/deleteProduct/:IDProduct', ProductController.deleteProduct);
router.get('/getProduct/:IDProduct', ProductController.detailProduct);


module.exports = router;
