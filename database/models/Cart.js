module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    total: { type: DataTypes.DECIMAL(12, 2), allowNull: false, defaultValue: 0 },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'carts',
    timestamps: false
  });

  Cart.associate = db => {
    Cart.belongsTo(db.User, { as: 'user', foreignKey: 'user_id' });
    Cart.hasMany(db.CartItem, { as: 'items', foreignKey: 'cart_id' });
  };

  return Cart;
};