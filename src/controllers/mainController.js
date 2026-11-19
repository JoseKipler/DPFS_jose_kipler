const db = require('../../database/models');

const mainController = {
  home: async (req, res, next) => {
    try {
      const products = await db.Product.findAll({ limit: 4, order: [['id', 'ASC']] });

      res.render('index', {
        title: 'NEXUS - Tecnología & Gaming',
        css: 'home',
        products
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = mainController;