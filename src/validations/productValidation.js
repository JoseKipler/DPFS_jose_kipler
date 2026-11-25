const { body } = require('express-validator');
const db = require('../../database/models');

module.exports = [
  body('name')
    .trim()
    .notEmpty().withMessage('Ingresá el nombre del producto.').bail()
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres.'),

  body('description')
    .trim()
    .notEmpty().withMessage('Ingresá la descripción.').bail()
    .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres.'),

  body('price')
    .notEmpty().withMessage('Ingresá el precio.').bail()
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a cero.'),

  body('category_id')
    .notEmpty().withMessage('Elegí una categoría.').bail()
    .custom(async value => {
      const category = await db.Category.findByPk(value);
      if (!category) {
        throw new Error('La categoría elegida no existe.');
      }
      return true;
    }),

  body('colors')
    .optional()
    .custom(async value => {
      const ids = [...new Set([].concat(value))];
      const found = await db.Color.count({ where: { id: ids } });
      if (found !== ids.length) {
        throw new Error('Alguno de los colores elegidos no existe.');
      }
      return true;
    }),

  body('image')
    .custom((value, { req }) => {
      if (req.fileValidationError) {
        throw new Error(req.fileValidationError);
      }
      return true;
    })
];