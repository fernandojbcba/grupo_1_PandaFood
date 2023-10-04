const express = require('express')
const path = require('path');
const router = express.Router()
const multer = require('multer');

const Controller = require('../controllers/indexController');
const productController = require('../controllers/indexController');

//almacenamiento de imagen del menu
const storage= multer.diskStorage({
    destination:(req, file, cb) => {
        const folder = path.join(__dirname, '../../public/img/productos');
        cb(null, folder);
    },
    //cambiar nombre
    filename: (req, file,cb) => {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname))
    }
});

const upload = multer ({
    storage
});

//vistas
router.get('/', Controller.home);
router.get('/detalle/:id', Controller.detalle);
router.get('/login', Controller.login);
router.get('/registro', Controller.registro);
router.get('/carrito', Controller.cart);
router.get('/create', Controller.create);
router.get('/edit/:id', Controller.edit);
//crud productos

router.get('/admin/listProducts', Controller.listProducts)
router.post('/admin/create', upload.single('image'), Controller.createProcess);
router.put('/admin/edit-process/:id', Controller.update);
router.delete('/admin/delete/:id', productController.destroy);

module.exports = router