module.exports = (sequelize, dataType) => {
  const alias = 'Invoice';
  const cols = {
    id: {
      type: dataType.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: dataType.BIGINT.UNSIGNED,
      allowNull: false,
    },
    date: {
      type: dataType.DATE,
      allowNull: false,
    },
    totalAmount: {
      type: dataType.FLOAT,
      allowNull: false,
    },
  };
  const config = {
    tableName: 'invoice',
    timestamps: false,
  };
  const Invoice = sequelize.define(alias, cols, config);

  Invoice.associate = function (models) {
    Invoice.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  };

  return Invoice;
};
