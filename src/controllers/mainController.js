const Product = require('../models/Product');

const mainController = {
  home: (req, res) => {
    const featured = Product.getAll().slice(0, 4);

    res.render('index', {
      title: 'NEXUS - Tecnología & Gaming',
      css: 'home',
      products: featured
    });
  }
};

module.exports = mainController;