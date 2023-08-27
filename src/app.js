const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");

//const mainRouter =require ('./routes')
const Router = require('./routes/indexRouter');

const publicPath = path.join(__dirname, '../public'); //Hacer publicos los archivos de la carpeta public
app.use(express.static(publicPath));
app.use(express.urlencoded( { extended: false } ));
app.use(express.json());
app.use(methodOverride("_method"));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
    

app.listen(process.env.PORT || 3010, function() {
  console.log("Servidor corriendo ");
});


app.use('/', Router);

