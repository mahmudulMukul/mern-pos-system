const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
    }, 

    description: {
        type: String,
        required: [true, "Please enter product description"],
    },

    price: {
        type: Number,
        required: [true, "Please enter product price"],
    },

    category: {
        type: String,
        required: [true, "Please select product category"],
    },

    stock: {
        type: Number,
        required: [true, "Please endter product stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
    },

    image: {
        type: String,
        required: [true, "Please enter product image"],
    }

    // images: [
    //     {
    //       public_id: {
    //         type: String,
    //         required: true,
    //       },
    //       url: {
    //         type: String,
    //         required: true,
    //       },
    //     },
    //   ],
})

module.exports = mongoose.model("Product", productSchema)