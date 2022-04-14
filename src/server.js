const colors = require('colors');
const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv').config({ path: __dirname + '/config/.env' });
const connection = require('./database/connection');

// Settings
const PORT = process.env.PORT || 5000;
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Rutas
app.use('/users', require('./routes/user.routes'));
app.use('/posts', require('./routes/post.routes'));
app.use('/reviews', require('./routes/review.routes'));
app.use('/cart', require('./routes/cart.routes'));
app.use('/history', require('./routes/history.routes'));


// Arrancamos el servidor
// http://localhost:5000
app.listen(PORT, async function () {
    console.log(`\nServidor iniciado en el puerto ${PORT}.`.green);
    await connection(process.env.DB_NAME);
});
