const Product = require('../models/Product');

const productsController = {
  list: (req, res) => {
    res.render('products/productList', {
      title: 'Productos | NEXUS',
      css: 'home',
      products: Product.getAll()
    });
  },

  detail: (req, res) => {
    const product = Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    const related = Product.getAll()
      .filter(p => p.id !== product.id)
      .slice(0, 3);

    res.render('products/productDetail', {
      title: `${product.name} | NEXUS`,
      css: ['home', 'productDetail'],
      product,
      related
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
    const product = Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    res.render('products/productEdit', {
      title: 'Editar producto | NEXUS',
      css: 'forms',
      product
    });
  },

  store: (req, res) => {
    const { name, description, image, category, colors, price } = req.body;

    const newProduct = Product.create({
      name,
      description,
      image: image || 'default.png',
      category,
      colors: [].concat(colors || []),
      price: Number(price)
    });

    res.redirect('/products/' + newProduct.id);
  },

  update: (req, res) => {
    const { name, description, image, category, colors, price } = req.body;

    const updated = Product.update(req.params.id, {
      name,
      description,
      image: image || 'default.png',
      category,
      colors: [].concat(colors || []),
      price: Number(price)
    });

    if (!updated) {
      return res.status(404).send('Producto no encontrado');
    }

    res.redirect('/products/' + req.params.id);
  },

  destroy: (req, res) => {
    const product = Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    Product.delete(req.params.id);
    res.redirect('/products');
  }
};

module.exports = productsController;