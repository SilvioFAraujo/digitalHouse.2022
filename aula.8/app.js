const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/cadastro.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.use(function(req, res, next) {
    res.status(404).send("desculpe, essa página não existe");
});

app.listen(3000)