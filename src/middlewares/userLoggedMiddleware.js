const db = require('../../database/models');
const toSessionUser = require('../utils/sessionUser');

async function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  res.locals.userLogged = null;

  try {
    const emailInCookie = req.signedCookies.userEmail;

    if (emailInCookie && !req.session.userLogged) {
      const user = await db.User.findOne({
        where: { email: emailInCookie },
        include: ['category']
      });

      if (user) {
        req.session.userLogged = toSessionUser(user);
      }
    }

    if (req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = userLoggedMiddleware;