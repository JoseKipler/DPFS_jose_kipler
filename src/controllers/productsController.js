const products = [
  { id: 1, name: 'Teclado mecánico RGB', description: 'Teclado mecánico 60% con iluminación RGB.', price: 85000, category: 'teclados', colors: ['negro', 'blanco'] },
  { id: 2, name: 'Mouse gamer inalámbrico', description: 'Mouse liviano con sensor de alta precisión.', price: 42000, category: 'mouse', colors: ['negro'] },
  { id: 3, name: 'Auriculares 7.1', description: 'Auriculares con sonido envolvente.', price: 68000, category: 'auriculares', colors: ['negro', 'rojo'] },
  { id: 4, name: 'Monitor 24" 144Hz', description: 'Monitor gamer con tasa de refresco de 144Hz.', price: 210000, category: 'monitores', colors: ['negro'] }
];

const productsController = {
  list: (req, res) => {
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
  },
  create: (req, res) => {
    res.render('products/productCreate', {
      title: 'Crear producto | NEXUS',
      css: 'forms'
    });
  },
  edit: (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    res.render('products/productEdit', {
      title: 'Editar producto | NEXUS',
      css: 'forms',
      product
    });
  }
};

module.exports = productsController;