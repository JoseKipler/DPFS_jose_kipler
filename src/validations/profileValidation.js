const { body } = require('express-validator');

module.exports = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('Ingresá tu nombre.').bail()
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),

  body('lastName')
    .trim()
    .notEmpty().withMessage('Ingresá tu apellido.').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),

  body('image')
    .custom((value, { req }) => {
      if (req.fileValidationError) {
        throw new Error(req.fileValidationError);
      }
      return true;
    })
];