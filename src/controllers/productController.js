const { log } = require('console');
const fs = require('fs');
const path = require('path');

const productsJson = fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8");
const products = JSON.parse(productsJson);

function writeFileJSON(data){
  const dataString = JSON.stringify(data);
  fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString );
}

const productController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  registro: (req, res) => {
    res.render("./users/registro");
  },
  cart: (req,res)=>{
    res.render('./products/cart')
  },
  home: (req, res) => {
    res.render("home", { menu: products });
  },
  detalle: (req, res) => {
    let menuEncontrado = products.find((menu) => menu.id == req.params.id);
    res.render("./products/detalleProducto", { menu: menuEncontrado });
  },
  create: (req, res) => {
    res.render('./products/creacion')
  },
  createProcess: (req, res) => {
    let newMenu = {
      id: products.length + 1,
      title: req.body.titulo,
      category: req.body.categoria,
      description: req.body.descripcion,
      price: req.body.precio,
    }

    products.push(newMenu);

    writeFileJSON(products);

    res.redirect('/')
  },
  edit: (req, res) => {
    let menuEncontrado = products.find((menu) => menu.id == req.params.id);

    res.render('./products/edicion', { menu: menuEncontrado  });
  },
  update: (req, res) => {
    //obtendo el producto
    let menuEncontrado = products.find((menu) => menu.id == req.params.id);
    //actualizo el producto
    menuEncontrado.title = req.body.titulo;
    menuEncontrado.category = req.body.categoria;
    menuEncontrado.description = req.body.descripcion;
    menuEncontrado.price = req.body.precio;
    //actualizo la DB
    writeFileJSON(products);

    res.redirect('/')
  }
}
  
module.exports = productController;