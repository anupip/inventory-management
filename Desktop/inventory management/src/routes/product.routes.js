const express = require('express');
const router = express.Router();
const { addproduct, updateproductquantity, getallproducts } = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, addproduct);
router.put('/:id/quantity', auth, updateproductquantity);
router.get('/', auth, getallproducts);

module.exports = router;
