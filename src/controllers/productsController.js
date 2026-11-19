const db = require('../../database/models');
const { Op } = db.Sequelize;

const loadFormData = async () => ({
  categories: await db.Category.findAll({ order: [['name', 'ASC']] }),
  colors: await db.Color.findAll({ order: [['name', 'ASC']] })
});

const toValues = body => ({
  name: body.name || '',
  description: body.description || '',
  image: body.image || 'default.png',
  category_id: String(body.category_id || ''),
  price: body.price || '',
  colorIds: [].concat(body.colors || []).map(String)
});

const validate = body => {
  const errors = {};

  if (!body.name || body.name.trim().length < 3) {
    errors.name = 'El nombre debe tener al menos 3 caracteres.';
  }
  if (!body.description || body.description.trim().length < 10) {
    errors.description = 'La descripción debe tener al menos 10 caracteres.';
  }
  if (!body.category_id) {
    errors.category_id = 'Elegí una categoría.';
  }
  if (!body.price || Number(body.price) <= 0) {
    errors.price = 'Ingresá un precio mayor a cero.';
  }

  return errors;
};

const productsController = {
   list: async (req, res, next) => {
    try {
      const PAGE_SIZE = 8;
      const query = (req.query.q || '').trim();
      const page = Math.max(parseInt(req.query.page, 10) || 1, 1);

      const where = query
        ? {
            [Op.or]: [
              { name: { [Op.like]: `%${query}%` } },
              { description: { [Op.like]: `%${query}%` } }
            ]
          }
        : {};

      const { count, rows } = await db.Product.findAndCountAll({
        where,
        order: [['id', 'ASC']],
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE
      });

      const totalPages = Math.max(Math.ceil(count / PAGE_SIZE), 1);

      if (page > totalPages) {
        const back = new URLSearchParams({ page: totalPages });
        if (query) back.set('q', query);
        return res.redirect('/products?' + back.toString());
      }

      res.render('products/productList', {
        title: 'Productos | NEXUS',
        css: 'home',
        products: rows,
        query,
        page,
        totalPages,
        total: count
      });
    } catch (error) {
      next(error);
    }
  },

  detail: async (req, res, next) => {
    try {
      const product = await db.Product.findByPk(req.params.id, {
        include: ['category', 'colors']
      });

      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }

      const related = await db.Product.findAll({
        where: { id: { [Op.ne]: product.id }, category_id: product.category_id },
        limit: 3
      });

      res.render('products/productDetail', {
        title: `${product.name} | NEXUS`,
        css: ['home', 'productDetail'],
        product,
        related
      });
    } catch (error) {
      next(error);
    }
  },

  cart: (req, res) => {
    res.render('products/productCart', {
      title: 'Carrito | NEXUS',
      css: 'cart'
    });
  },

  create: async (req, res, next) => {
    try {
      res.render('products/productCreate', {
        title: 'Crear producto | NEXUS',
        css: 'forms',
        ...(await loadFormData()),
        values: toValues({}),
        errors: {}
      });
    } catch (error) {
      next(error);
    }
  },

  store: async (req, res, next) => {
    try {
      const errors = validate(req.body);

      if (Object.keys(errors).length > 0) {
        return res.status(400).render('products/productCreate', {
          title: 'Crear producto | NEXUS',
          css: 'forms',
          ...(await loadFormData()),
          values: toValues(req.body),
          errors
        });
      }

      const product = await db.Product.create({
        name: req.body.name.trim(),
        description: req.body.description.trim(),
        image: req.body.image || 'default.png',
        price: Number(req.body.price),
        category_id: req.body.category_id
      });

      await product.setColors([].concat(req.body.colors || []));

      res.redirect('/products/' + product.id);
    } catch (error) {
      next(error);
    }
  },

  edit: async (req, res, next) => {
    try {
      const product = await db.Product.findByPk(req.params.id, { include: ['colors'] });

      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }

      res.render('products/productEdit', {
        title: 'Editar producto | NEXUS',
        css: 'forms',
        product,
        ...(await loadFormData()),
        values: toValues({
          name: product.name,
          description: product.description,
          image: product.image,
          category_id: product.category_id,
          price: Number(product.price),
          colors: product.colors.map(color => color.id)
        }),
        errors: {}
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const product = await db.Product.findByPk(req.params.id);

      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }

      const errors = validate(req.body);

      if (Object.keys(errors).length > 0) {
        return res.status(400).render('products/productEdit', {
          title: 'Editar producto | NEXUS',
          css: 'forms',
          product,
          ...(await loadFormData()),
          values: toValues(req.body),
          errors
        });
      }

      await product.update({
        name: req.body.name.trim(),
        description: req.body.description.trim(),
        image: req.body.image || 'default.png',
        price: Number(req.body.price),
        category_id: req.body.category_id
      });

      await product.setColors([].concat(req.body.colors || []));

      res.redirect('/products/' + product.id);
    } catch (error) {
      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      const product = await db.Product.findByPk(req.params.id);

      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }

      await product.destroy();
      res.redirect('/products');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = productsController;