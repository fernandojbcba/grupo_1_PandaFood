const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config'); 

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect
  }
);
const Product = require('./Product');
const Invoice = require('./Invoice');

const InvoiceDetail = sequelize.define('invoiceDetail', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  invoiceId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  productId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  quantity: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  unitPrice: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
},
{
  tableName :'invoice_detail',
  timestamps:false,
});
InvoiceDetail.belongsTo(Invoice, { foreignKey: 'invoice_id', as: 'invoice' });
InvoiceDetail.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
module.exports = InvoiceDetail;
