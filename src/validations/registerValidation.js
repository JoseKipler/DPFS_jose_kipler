const { body } = require('express-validator');
const db = require('../../database/models');

module.exports = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('Ingresá tu nombre.').bail()
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),

  body('lastName')
    .trim()
    .notEmpty().withMessage('Ingresá tu apellido.').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),

  body('email')
    .trim()
    .toLowerCase()
    .notEmpty().withMessage('Ingresá tu email.').bail()
    .isEmail().withMessage('Ingresá un email válido.').bail()
    .custom(async value => {
      const user = await db.User.findOne({ where: { email: value } });
      if (user) {
        throw new Error('Este email ya está registrado.');
      }
      return true;
    }),

   body('password')
    .notEmpty().withMessage('Ingresá una contraseña.').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.').bail()
    .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
    .withMessage('Debe incluir mayúscula, minúscula, un número y un carácter especial.'),

  body('password2')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Las contraseñas no coinciden.'),

  body('terms')
    .exists({ checkFalsy: true }).withMessage('Tenés que aceptar los términos y condiciones.'),

  body('image')
    .custom((value, { req }) => {
      if (req.fileValidationError) {
        throw new Error(req.fileValidationError);
      }
      return true;
    })
];