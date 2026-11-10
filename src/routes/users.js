const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadUserImage = require('../middlewares/uploadUserImage');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/register', guestMiddleware, usersController.register);
router.post('/register', guestMiddleware, uploadUserImage.single('image'), usersController.processRegister);
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, usersController.processLogin);


router.get('/profile', authMiddleware, usersController.profile);
router.post('/logout', authMiddleware, usersController.logout);

module.exports = router;