const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', productsController.list);
router.get('/create', authMiddleware, productsController.create);
router.post('/', authMiddleware, productsController.store);
router.get('/cart', productsController.cart);
router.get('/:id/edit', authMiddleware, productsController.edit);
router.put('/:id', authMiddleware, productsController.update);
router.delete('/:id', authMiddleware, productsController.destroy);
router.get('/:id', productsController.detail);

module.exports = router;