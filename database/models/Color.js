module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(50), allowNull: false, unique: true }
  }, {
    tableName: 'colors',
    timestamps: false
  });

  Color.associate = db => {
    Color.belongsToMany(db.Product, {
      as: 'products',
      through: 'product_color',
      foreignKey: 'color_id',
      otherKey: 'product_id',
      timestamps: false
    });
  };

  return Color;
};