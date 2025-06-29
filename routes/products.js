const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productController');
const authenticate = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.post('/', authenticate, createProduct);

module.exports = router;
