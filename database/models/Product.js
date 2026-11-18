module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(150), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING(255), allowNull: false, defaultValue: 'default.png' },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    category_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
  }, {
    tableName: 'products',
    timestamps: false
  });

  Product.associate = db => {
    Product.belongsTo(db.Category, { as: 'category', foreignKey: 'category_id' });
    Product.belongsToMany(db.Color, {
      as: 'colors',
      through: 'product_color',
      foreignKey: 'product_id',
      otherKey: 'color_id',
      timestamps: false
    });
    Product.hasMany(db.CartItem, { as: 'cartItems', foreignKey: 'product_id' });
  };

  return Product;
};