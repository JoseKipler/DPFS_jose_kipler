const productsController = {
  detail: (req, res) => {
    res.render('products/productDetail', {
      title: 'Detalle de producto | NEXUS',
      css: ['home', 'productDetail'],
      id: req.params.id
    });
  },
  cart: (req, res) => {
    res.render('products/productCart', {
      title: 'Carrito | NEXUS',
      css: 'cart'
    });
  }
};

module.exports = productsController;