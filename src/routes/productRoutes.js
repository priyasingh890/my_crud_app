
// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *               price:
 *                 type: number
 *                 description: The price of the product
 *             example:
 *               name: Sample Product
 *               price: 100
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created product
 *                 name:
 *                   type: string
 *                   description: The name of the newly created product
 *                 price:
 *                   type: number
 *                   description: The price of the newly created product
 *               example:
 *                 id: 1
 *                 name: Sample Product
 *                 price: 100
 *       400:
 *         description: Invalid input
 */
router.post('/products', productController.createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the product
 *                   name:
 *                     type: string
 *                     description: The name of the product
 *                   price:
 *                     type: number
 *                     description: The price of the product
 *             example:
 *               - id: 1
 *                 name: Sample Product 1
 *                 price: 100
 *               - id: 2
 *                 name: Sample Product 2
 *                 price: 150
 */
router.get('/products', productController.getAllProducts);

module.exports = router;
