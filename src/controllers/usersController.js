const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');
const toSessionUser = require('../utils/sessionUser');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const deleteImage = filename => {
  if (filename && filename !== 'default-user.png') {
    fs.unlink(path.join(__dirname, '../../public/images/users', filename), () => {});
  }
};

const usersController = {
  register: (req, res) => {
    res.render('users/register', {
      title: 'Crear cuenta | NEXUS',
      css: 'forms',
      errors: {},
      old: {}
    });
  },

  processRegister: async (req, res, next) => {
    try {
      const { firstName, lastName, email, password, password2, terms } = req.body;
      const cleanEmail = (email || '').trim().toLowerCase();
      const errors = {};

      if (!firstName || firstName.trim().length < 2) {
        errors.firstName = 'Ingresá tu nombre (mínimo 2 caracteres).';
      }
      if (!lastName || lastName.trim().length < 2) {
        errors.lastName = 'Ingresá tu apellido (mínimo 2 caracteres).';
      }
      if (!emailRegex.test(cleanEmail)) {
        errors.email = 'Ingresá un email válido.';
      } else if (await db.User.findOne({ where: { email: cleanEmail } })) {
        errors.email = 'Este email ya está registrado.';
      }
      if (!password || password.length < 8) {
        errors.password = 'La contraseña debe tener al menos 8 caracteres.';
      }
      if (password !== password2) {
        errors.password2 = 'Las contraseñas no coinciden.';
      }
      if (!terms) {
        errors.terms = 'Tenés que aceptar los términos y condiciones.';
      }

      if (Object.keys(errors).length > 0) {
        if (req.file) deleteImage(req.file.filename);

        return res.status(400).render('users/register', {
          title: 'Crear cuenta | NEXUS',
          css: 'forms',
          errors,
          old: req.body
        });
      }

      const userCategory = await db.UserCategory.findOne({ where: { name: 'user' } });

      await db.User.create({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: cleanEmail,
        password: bcrypt.hashSync(password, 10),
        image: req.file ? req.file.filename : 'default-user.png',
        user_category_id: userCategory.id
      });

      res.redirect('/users/login');
    } catch (error) {
      next(error);
    }
  },

  login: (req, res) => {
    res.render('users/login', {
      title: 'Iniciar sesión | NEXUS',
      css: 'forms',
      errors: {},
      old: {}
    });
  },

  processLogin: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const cleanEmail = (email || '').trim().toLowerCase();

      const user = cleanEmail
        ? await db.User.findOne({ where: { email: cleanEmail }, include: ['category'] })
        : null;

      const isValid = user && password && bcrypt.compareSync(password, user.password);

      if (!isValid) {
        return res.status(401).render('users/login', {
          title: 'Iniciar sesión | NEXUS',
          css: 'forms',
          errors: { general: 'El email o la contraseña son incorrectos.' },
          old: { email }
        });
      }

      req.session.userLogged = toSessionUser(user);

      if (req.body.remember) {
        res.cookie('userEmail', user.email, {
          signed: true,
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 30
        });
      }

      res.redirect('/users/profile');
    } catch (error) {
      next(error);
    }
  },

  profile: (req, res) => {
    res.render('users/profile', {
      title: 'Mi perfil | NEXUS',
      css: 'forms',
      user: req.session.userLogged
    });
  },

  edit: (req, res) => {
    const user = req.session.userLogged;

    res.render('users/profileEdit', {
      title: 'Editar perfil | NEXUS',
      css: 'forms',
      user,
      errors: {},
      old: { firstName: user.firstName, lastName: user.lastName }
    });
  },

  update: async (req, res, next) => {
    try {
      const { firstName, lastName } = req.body;
      const sessionUser = req.session.userLogged;
      const errors = {};

      if (!firstName || firstName.trim().length < 2) {
        errors.firstName = 'Ingresá tu nombre (mínimo 2 caracteres).';
      }
      if (!lastName || lastName.trim().length < 2) {
        errors.lastName = 'Ingresá tu apellido (mínimo 2 caracteres).';
      }

      if (Object.keys(errors).length > 0) {
        if (req.file) deleteImage(req.file.filename);

        return res.status(400).render('users/profileEdit', {
          title: 'Editar perfil | NEXUS',
          css: 'forms',
          user: sessionUser,
          errors,
          old: req.body
        });
      }

      const user = await db.User.findByPk(sessionUser.id, { include: ['category'] });

      const changes = {
        first_name: firstName.trim(),
        last_name: lastName.trim()
      };

      if (req.file) {
        deleteImage(user.image);
        changes.image = req.file.filename;
      }

      await user.update(changes);

      req.session.userLogged = toSessionUser(user);
      res.redirect('/users/profile');
    } catch (error) {
      next(error);
    }
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy(() => {
      res.redirect('/');
    });
  }
};

module.exports = usersController;