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

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  tableName :'category',
  timestamps:false,
}
);

module.exports = Category;
