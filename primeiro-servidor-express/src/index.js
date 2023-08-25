const express = require('express');

const app = express();

app.get('/home', (requisicao, resposta) => {
    resposta.send('Cara, que aula empolgante!');
});

app.listen(3000);