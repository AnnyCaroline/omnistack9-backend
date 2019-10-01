require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-8mfvh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// - req.query: query params (usado mais para filtros)
// - req.paramns.id: route params (também tenho que indicar na rota. Por exemplo: /users/:id)
// - req.body: corpo da requisição

app.use(express.json());
app.use(routes);

app.listen(3333);