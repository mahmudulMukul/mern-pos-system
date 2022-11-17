const Product = require("../models/Product")

exports.getAllProducts = async ( req, res ) => {
    // res.json({message: 'This is product list'})
    const products = await Product.find()
    res.json(products)
}


// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
exports.createProduct = async (req, res) => {
    const product = new Product({
      name: 'Sample name 2',
      description: 'This is product description 2',
      price: 85,
      category: 'Sample category 2',
      stock: 3,
      image: '/images/sample.jpg',
    })

    const result = await product.save()

    if(result) {
        res.send(result)
    } else {
        res.json({message: "Faild to save data"})
    }
}