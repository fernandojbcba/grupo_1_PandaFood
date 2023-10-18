module.exports= (sequelize, dataType) => {

  const alias =  'InvoiceDetail';
  const cols = {
  id: {
    type: dataType.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  invoiceId: {
    type: dataType.BIGINT.UNSIGNED,
    allowNull: false
  },
  productId: {
    type: dataType.BIGINT.UNSIGNED,
    allowNull: false
  },
  quantity: {
    type: dataType.BIGINT,
    allowNull: false
  },
  unitPrice: {
    type: dataType.BIGINT,
    allowNull: false
  }
};
const config = {
  tableName :'invoice_detail',
  timestamps:false,
};
const InvoiceDetail = sequelize.define(alias, cols, config);

InvoiceDetail.associate = function(models){
      InvoiceDetail.belongsTo(models.Invoice, { foreignKey: 'invoice_id', as: 'invoice' });
      InvoiceDetail.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });

    }    
    
    return InvoiceDetail;
} 

