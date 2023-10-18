module.exports= (sequelize, dataType) => {

  const alias = 'User';          

  const cols = {
  id: {
    type: dataType.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: dataType.STRING,
    allowNull: false
  },
  lastName: {
    type: dataType.STRING,
    allowNull: false
  },
  email: {
    type: dataType.STRING,
    allowNull: false
  },
  password: {
    type: dataType.STRING,
    allowNull: false
  },
  role_id: {
    type: dataType.BIGINT.UNSIGNED,
    allowNull: false,
  },
  image: {
    type: dataType.STRING,
    allowNull: true
  },
  deletedAt: {
    type: dataType.DATE,
    allowNull: true
  },
  createdAt: {
    type: dataType.DATE,
    allowNull: false
  },
  updatedAt: {
    type: dataType.DATE,
    allowNull: false
  }
};
  const config = {
  tableName :'user',
  paranoid: true 
}
const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Role, { foreignKey: 'role_id', as: 'userRole' });

    }    
    
    return User;

  }



