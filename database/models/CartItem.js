module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    cart_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    product_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    quantity: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, defaultValue: 1 },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
  }, {
    tableName: 'cart_items',
    timestamps: false
  });

  CartItem.associate = db => {
    CartItem.belongsTo(db.Cart, { as: 'cart', foreignKey: 'cart_id' });
    CartItem.belongsTo(db.Product, { as: 'product', foreignKey: 'product_id' });
  };

  return CartItem;
};