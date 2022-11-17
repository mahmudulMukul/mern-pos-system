const express = require('express')
const { getAllProducts, createProduct } = require('../controllers/product.controller')

const router = express.Router()

router.get('/products', getAllProducts)
router.post('/create/product', createProduct)

module.exports = router