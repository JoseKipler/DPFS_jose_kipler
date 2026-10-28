const productsController = {
  list: (req, res) => {
    const products = [
      { id: 1, name: 'Teclado mecánico RGB', price: 85000, category: 'Teclados' },
      { id: 2, name: 'Mouse gamer inalámbrico', price: 42000, category: 'Mouse' },
      { id: 3, name: 'Auriculares 7.1', price: 68000, category: 'Auriculares' },
      { id: 4, name: 'Monitor 24" 144Hz', price: 210000, category: 'Monitores' }
    ];

    res.render('products/productList', {
      title: 'Productos | NEXUS',
      css: 'home',
      products
    });
  },
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