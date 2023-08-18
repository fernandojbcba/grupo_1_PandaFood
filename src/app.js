const express = require('express');
const app = express();
const path = require('path');
const mainRouter =require ('./routes')
const publicPath = path.join(__dirname, '../public'); //Hacer publicos los archivos de la carpeta public
const loginRouter = require('./routes/loginRouter');
const registroRouter= require("./routes/registroRouter");
app.use(express.static(publicPath));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
    

app.listen(process.env.PORT || 3010, function() {
  console.log("Servidor corriendo ");
});


app.use('/',mainRouter)
app.use('/login', loginRouter);
app.use("/registro", registroRouter);