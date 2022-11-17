const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((data) => {
        console.log(`Mongodb connected with server: ${data.connect.host}`);
    })
}

module.exports = connectDatabase