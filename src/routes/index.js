const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/', controller.home)

router.get('/detalle/:id', controller.detalle)
router.get('/login', controller.login)
router.get('/registro', controller.registro)
router.get('/carrito', controller.cart)





module.exports = router