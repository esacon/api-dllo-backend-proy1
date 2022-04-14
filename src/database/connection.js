const mongoose = require('mongoose');
const colors = require('colors');
const env = require('dotenv').config({ path: '../config/.env' });

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const connection = (db_name) => {
    const URI = `mongodb+srv://${username}:${password}@dll-backend.o8plo.mongodb.net/${db_name}?retryWrites=true&w=majority`;

    mongoose.connect(URI)
            .then(() => {
                console.log("\nBase de datos conectada con éxito.".yellow);
            })
            .catch((err) => {
                console.log("\nHa ocurrido un error al conectarse a la base de datos: ".red);
                console.log(err);
            });
};

module.exports = connection;
