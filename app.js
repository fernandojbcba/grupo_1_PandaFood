const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, './public'); //Hacer publicos los archivos de la carpeta public
app.use(express.static(publicPath));

    

app.listen(process.env.PORT || 3010, function() {
  console.log("Servidor corriendo ");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});
app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname,'/views/registro.html'))
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname,'/views/login.html'))
});
app.get('/detalle', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/detalleProducto.html'))
  });
  app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/carrito.html'))
  });