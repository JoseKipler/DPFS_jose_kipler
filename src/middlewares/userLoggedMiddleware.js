const User = require('../models/User');

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  res.locals.userLogged = null;

  // Si no hay sesión pero hay cookie válida, loguea al usuario
  const emailInCookie = req.signedCookies.userEmail;

  if (emailInCookie && !req.session.userLogged) {
    const user = User.findByEmail(emailInCookie);

    if (user) {
      const { password: _password, ...safeUser } = user;
      req.session.userLogged = safeUser;
    }
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;