const usersController = {
  register: (req, res) => {
    res.render('users/register', {
      title: 'Crear cuenta | NEXUS',
      css: 'forms'
    });
  },
  login: (req, res) => {
    res.render('users/login', {
      title: 'Iniciar sesión | NEXUS',
      css: 'forms'
    });
  }
};

module.exports = usersController;