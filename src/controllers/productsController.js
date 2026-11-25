const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../../database/models');
const formatErrors = require('../utils/formatErrors');
const { Op } = db.Sequelize;

const deleteImage = filename => {
  if (filename && filename !== 'default.png') {
    fs.unlink(path.join(__dirname, '../../public/images/products', filename), () => {});
  }
};

const loadFormData = async () => ({
  categories: await db.Category.findAll({ order: [['name', 'ASC']] }),
  colors: await db.Color.findAll({ order: [['name', 'ASC']] })
});

const toValues = body => ({
  name: body.name || '',
  description: body.description || '',
  category_id: String(body.category_id || ''),
  price: body.price || '',
  colorIds: [].concat(body.colors || []).map(String)
});

const productsController = {
  list: async (req, res, next) => {
    try {
      const PAGE_SIZE = 6;
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
        currentImage: '',
        errors: {}
      });
    } catch (error) {
      next(error);
    }
  },

  store: async (req, res, next) => {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        if (req.file) deleteImage(req.file.filename);

        return res.status(400).render('products/productCreate', {
          title: 'Crear producto | NEXUS',
          css: 'forms',
          ...(await loadFormData()),
          values: toValues(req.body),
          currentImage: '',
          errors: formatErrors(result)
        });
      }

      const product = await db.Product.create({
        name: req.body.name,
        description: req.body.description,
        image: req.file ? req.file.filename : 'default.png',
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
          category_id: product.category_id,
          price: Number(product.price),
          colors: product.colors.map(color => color.id)
        }),
        currentImage: product.image,
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
        if (req.file) deleteImage(req.file.filename);
        return res.status(404).send('Producto no encontrado');
      }

      const result = validationResult(req);

      if (!result.isEmpty()) {
        if (req.file) deleteImage(req.file.filename);

        return res.status(400).render('products/productEdit', {
          title: 'Editar producto | NEXUS',
          css: 'forms',
          product,
          ...(await loadFormData()),
          values: toValues(req.body),
          currentImage: product.image,
          errors: formatErrors(result)
        });
      }

      const changes = {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category_id: req.body.category_id
      };

      if (req.file) {
        deleteImage(product.image);
        changes.image = req.file.filename;
      }

      await product.update(changes);
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

      deleteImage(product.image);
      await product.destroy();

      res.redirect('/products');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = productsController;