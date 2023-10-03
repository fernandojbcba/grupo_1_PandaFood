const  Product  = require('../database/models/Product');
const Category = require('../database/models/Category');
const { Op } = require('sequelize');

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({include: [
      {
        model: Category,
        as: 'category',
        attributes: ['name']
      }
    ]});
    res.json(products);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {include: [
      {
        model: Category,
        as: 'category',
        attributes: ['name']
      }
    ]});
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      res.json({ message: 'Product updated', product: updatedProduct });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Product.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchProducts = async (req, res) => {
  const { query } = req.params;
  try {
    const products = await Product.findAll({
      where: {
        name: { [Op.like]: `%${query}%` }
      }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts
};
