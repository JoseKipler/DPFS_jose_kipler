const db = require('../database/models');

(async () => {
  try {
    const product = await db.Product.findOne({ include: ['category', 'colors'] });
    console.log('Producto:', product.name, '|', product.category.name, '|',
      product.colors.map(color => color.name).join(', '));

    const user = await db.User.findOne({ include: ['category'] });
    console.log('Usuario:', user.first_name, '|', user.category.name);

    console.log('Productos:', await db.Product.count(), '| Usuarios:', await db.User.count());
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await db.sequelize.close();
  }
})();