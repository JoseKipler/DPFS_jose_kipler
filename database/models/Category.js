module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(100), allowNull: false, unique: true }
  }, {
    tableName: 'categories',
    timestamps: false
  });

  Category.associate = db => {
    Category.hasMany(db.Product, { as: 'products', foreignKey: 'category_id' });
  };

  return Category;
};