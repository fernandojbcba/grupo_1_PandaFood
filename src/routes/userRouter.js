const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const usersController = require('../controllers/usersController');
const { checkAuthenticated, checkNotAuthenticated } = require('../middlewares/indexMiddleware');

// Almacenamiento de imagen de usuario
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.join(__dirname, '../../public/img/users');
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage
});

// Rutas accesibles por cualquiera
router.get('/', usersController.getAllUsers);

router.get('/logout', usersController.logoutUser)
router.get('/byid/:id', usersController.getUserById);
router.post('/login', usersController.loginUser);
router.post('/', upload.single('image'), usersController.createUser);
router.put('/byid/:id', upload.single('image'), usersController.updateUser);
router.delete('/byid/:id', usersController.deleteUser);

router.get('/logout', checkNotAuthenticated, usersController.logoutUser);
router.get('/byid/:id', checkNotAuthenticated, usersController.getUserById);
router.post('/login', checkNotAuthenticated, usersController.loginUser);
router.post('/', checkNotAuthenticated, upload.single('image'), usersController.createUser);


// Rutas accesibles solo con login
router.put('/byid/:id', checkAuthenticated, upload.single('image'), usersController.updateUser);
router.delete('/byid/:id', checkAuthenticated, usersController.deleteUser);


module.exports = router;
