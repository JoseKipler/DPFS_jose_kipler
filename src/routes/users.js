const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadUserImage = require('../middlewares/uploadUserImage');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Solo huéspedes
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', guestMiddleware, uploadUserImage.single('image'), usersController.processRegister);
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, usersController.processLogin);

// Solo usuarios con sesión
router.get('/profile', authMiddleware, usersController.profile);
router.get('/profile/edit', authMiddleware, usersController.edit);
router.put('/profile', authMiddleware, uploadUserImage.single('image'), usersController.update);
router.post('/logout', authMiddleware, usersController.logout);

module.exports = router;