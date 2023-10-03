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
const User = require('./User')

const Invoice = sequelize.define('invoice', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
},
{
  tableName :'invoice',
  timestamps:false,
});
Invoice.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
module.exports = Invoice;
