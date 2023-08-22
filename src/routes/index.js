const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.home);
router.get('/detalle/:id', productController.detalle);
router.get('/login', productController.login);
router.get('/registro', productController.registro);
router.get('/carrito', productController.cart);
router.get('/admin/create', productController.create);
//router.get('/edit/:id', productController.edit);

router.post('/admin/create', productController.createProcess);
//router.put('/edit-process/:id', productController.update);


module.exports = router