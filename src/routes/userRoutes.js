const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/product_data', userController.getAllUsers);
router.get('/product_data/:id', userController.getUserById);
router.post('/product_data', userController.createUser);
router.put('/product_data/:id', userController.updateUser);
router.delete('/product_data/:id', userController.deleteUser);

module.exports = router;
