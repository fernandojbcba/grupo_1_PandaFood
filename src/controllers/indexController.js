const { log } = require('console');

const Product = require('../database/models/Product');
const category = require('../database/models/Category');



const productController = {
  login: (req, res) => {
    res.render("./users/login", { user: req.session.user });
  },
  registro: (req, res) => {
    res.render("./users/registro", { user: req.session.user });
  },
  cart: (req,res)=>{
    res.render('./products/cart', { user: req.session.user })
  },
  home : async (req, res) => {
    try {
      const products = await Product.findAll({ where: { deletedAt:null } });
      const productDataValues = products.map(product => product.dataValues);
      
      const user = req.session.user;
      res.render('home', { menu: productDataValues, user });
    } catch (error) {
      console.error('Error fetching menu:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  detalle : async (req, res) => {
    const productId = req.params.id;
  
    try {
      const menuEncontrado = await Product.findByPk(productId);
  
      if (!menuEncontrado) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.render('./products/detalleProducto', { menu: menuEncontrado, user: req.session.user });
    } catch (error) {
      console.error('Error fetching product details:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  create: (req, res) => {
    res.render('./products/creacion', { user: req.session.user })
  },
  createProcess : async (req, res) => {
    const { name, category_id, description, price } = req.body;
    const image = req.file ? req.file.filename : "menu-predeterminado.jpg";
  console.log(name, category_id, description, price, image)
    try {
      const newMenu = await Product.create({
        name,
        category_id,
        description,
        price,
        image
      });
  
      res.redirect('/');
    } catch (error) {
      console.error('Error creating menu:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
edit : async (req, res) => {
    const productId = req.params.id;
  
    try {
      const products  = await Product.findByPk(productId);
      console.log(products)
     
      if (!products ) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.render('./products/edicion', { menu: products, user: req.session.user });
    } catch (error) {
      console.error('Error fetching product details for editing:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  update : async (req, res) => {
    const productId = req.params.id;
    const { name, category_id, descripction, price } = req.body;
  
    try {
      const menuEncontrado = await Product.findByPk(productId);
  
      if (!menuEncontrado) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Actualizar la información del producto
      menuEncontrado.name = name;
      menuEncontrado.category_id = category_id;
      menuEncontrado.description = descripction;
      menuEncontrado.price = price;
  
      // Guardar los cambios en la base de datos
      await menuEncontrado.save();
  
      res.redirect('/');
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  destroy : async (req, res) => {
    const productId = req.params.id;
  
    try {
      const menuEncontrado = await Product.findByPk(productId);
  
      if (!menuEncontrado) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
     
     
  
      // Guardar los cambios en la base de datos
      await menuEncontrado.save();
  
      res.redirect('/');
    } catch (error) {
      console.error('Error marking product as deleted:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  recuperarProcess : async (req, res) => {
    const productId = req.params.id;
  
    try {
      const menuEncontrado = await Product.findByPk(productId);
  
      if (!menuEncontrado) {
        return res.status(404).json({ message: 'Product not found' });
      }

  
      // Guardar los cambios en la base de datos
      await menuEncontrado.save();
  
      res.redirect('/');
    } catch (error) {
      console.error('Error recovering product:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
module.exports = productController;