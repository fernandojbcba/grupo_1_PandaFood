const express = require('express');
const router = express.Router();
const apiproductController = require('../controllers/apiProductController');
const apiuserController = require('../controllers/apiUserController');

// Rutas para Productos
router.post('/products', apiproductController.createProduct);
router.get('/products', apiproductController.getAllProducts);
router.get('/products/:id', apiproductController.getProductById);
router.put('/products/:id', apiproductController.updateProduct);
router.delete('/products/:id', apiproductController.deleteProduct);
router.get('/products/search/:query', apiproductController.searchProducts);

// Rutas para Usuarios
router.post('/users', apiuserController.createUser);
router.get('/users/:id', apiuserController.getUserById);
router.put('/users/:id', apiuserController.updateUser);

module.exports = router;