const express = require('express')
const router = express.Router()
const Controller = require('../controllers/indexController')

router.get('/', Controller.home);
router.get('/detalle/:id', Controller.detalle);
router.get('/login', Controller.login);
router.get('/registro', Controller.registro);
router.get('/carrito', Controller.cart);

router.get('/create', Controller.create);
router.get('/edit/:id', Controller.edit);

router.post('/admin/create', Controller.createProcess);
router.put('/admin/edit-process/:id', Controller.update);

module.exports = router