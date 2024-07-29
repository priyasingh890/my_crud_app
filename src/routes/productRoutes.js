
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/product_data', productController.createProduct);

module.exports = router;

