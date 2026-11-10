
const fs = require('fs');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {
  register: (req, res) => {
    res.render('users/register', {
      title: 'Crear cuenta | NEXUS',
      css: 'forms',
      errors: {},
      old: {}
    });
  },

  processRegister: (req, res) => {
    const { firstName, lastName, email, password, password2, terms } = req.body;
    const errors = {};

    if (!firstName || firstName.trim().length < 2) {
      errors.firstName = 'Ingresá tu nombre (mínimo 2 caracteres).';
    }

    if (!lastName || lastName.trim().length < 2) {
      errors.lastName = 'Ingresá tu apellido (mínimo 2 caracteres).';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Ingresá un email válido.';
    } else if (User.findByEmail(email.trim().toLowerCase())) {
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
      if (req.file) {
        fs.unlink(req.file.path, () => {});
      }

      return res.status(400).render('users/register', {
        title: 'Crear cuenta | NEXUS',
        css: 'forms',
        errors,
        old: req.body
      });
    }

    User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      password: bcrypt.hashSync(password, 10),
      category: 'user',
      image: req.file ? req.file.filename : 'default-user.png'
    });

    res.redirect('/users/login');
  },

  login: (req, res) => {
    res.render('users/login', {
      title: 'Iniciar sesión | NEXUS',
      css: 'forms',
      errors: {},
      old: {}
    });
  },

  processLogin: (req, res) => {
    const { email, password } = req.body;
    const user = email ? User.findByEmail(email.trim().toLowerCase()) : null;

    const isValid = user && password && bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return res.status(401).render('users/login', {
        title: 'Iniciar sesión | NEXUS',
        css: 'forms',
        errors: { general: 'El email o la contraseña son incorrectos.' },
        old: { email }
      });
    }

    // Guardamos el usuario en la sesión, sin la contraseña
    const { password: _password, ...safeUser } = user;
    req.session.userLogged = safeUser;

    // Recordar email mediante cookie firmada
    if (req.body.remember) {
      res.cookie('userEmail', user.email, {
        signed: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30 // 30 días
      });
    }

    res.redirect('/users/profile');
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');

    req.session.destroy(() => {
      res.redirect('/');
    });
  },

  // Mostrar perfil del usuario
  profile: (req, res) => {
    res.render('users/profile', {
      title: 'Mi perfil | NEXUS',
      css: 'forms',
      user: req.session.userLogged
    });
  }
};

module.exports = usersController;
