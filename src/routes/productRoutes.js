const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Path to your controller

router.post('/products', productController.createProduct);

module.exports = router;
