module.exports = (sequelize, dataType) => {
  const alias = 'Category';
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
  };
  const config = {
    tableName: 'category',
    timestamps: false,
  };
  const Category = sequelize.define(alias, cols, config);

  return Category;
};
