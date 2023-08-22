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
    console.log(req.body);
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
  }
}
  
module.exports = productController;