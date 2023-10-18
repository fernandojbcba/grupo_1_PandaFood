const express = require('express');
const methodOverride = require("method-override");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { checkRememberedUser } = require('./middlewares/indexMiddleware');
const app = express();
const path = require('path');

app.use(cookieParser());
app.use(checkRememberedUser);
app.use(
  session({
    secret: 'claveSecretaProximamenteENV',
    resave: true,
    saveUninitialized: true
  })
);


const Router = require('./routes/indexRouter');
const UserRoute = require('./routes/userRouter');
const apiRoutes = require('./routes/apiRoutes')

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
app.use('/users', UserRoute);

