module.exports = (sequelize, dataType) => {
  const alias = 'Product';
  const cols = {
    id: {
      type: dataType.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataType.STRING,
      allowNull: false,
    },
    category_id: {
      type: dataType.BIGINT.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: dataType.STRING,
      allowNull: false,
    },
    image: {
      type: dataType.STRING,
      allowNull: true,
    },
    price: {
      type: dataType.FLOAT,
      allowNull: false,
    },
    deletedAt: {
      type: dataType.DATE,
      allowNull: true,
    },
    createdAt: {
      type: dataType.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: dataType.DATE,
      allowNull: false,
    },
  };
  const config = {
    tableName: 'product',
    paranoid: true,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  };

  return Product;
};
