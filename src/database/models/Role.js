module.exports = (sequelize, dataType) => {
  const alias = 'Role';
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
    tableName: 'role',
    timestamps: false,
  };
  const Role = sequelize.define(alias, cols, config);

  return Role;
};
