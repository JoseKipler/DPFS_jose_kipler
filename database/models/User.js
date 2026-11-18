module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING(100), allowNull: false },
    last_name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(150), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    image: { type: DataTypes.STRING(255), allowNull: false, defaultValue: 'default-user.png' },
    user_category_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
  }, {
    tableName: 'users',
    timestamps: false
  });

  User.associate = db => {
    User.belongsTo(db.UserCategory, { as: 'category', foreignKey: 'user_category_id' });
    User.hasMany(db.Cart, { as: 'carts', foreignKey: 'user_id' });
  };

  return User;
};