require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDatabase = require("./config/DBConfig");
const productRouter = require('./routes/product.route')

const PORT = process.env.PORT || 8080;


app.use(cookieParser());
app.use(cors());


app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));

// app.use('/', require('./routes/root'));
app.use('/', productRouter)

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' });
    } else {
        res.type('txt').send('404 Not Found');
    }
})

connectDatabase();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));