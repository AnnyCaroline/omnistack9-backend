const express = require('express');

const app = express();

// - req.query: query params (usado mais para filtros)
// - req.paramns.id: route params (também tenho que indicar na rota. Por exemplo: /users/:id)
// - req.body: corpo da requisição

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json(req.body);
});

app.listen(3333);