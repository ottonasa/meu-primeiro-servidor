const express = require('express');
const { filtrarProfessores, encontrarProfessor } = require('./controladores/professores');


const app = express();


app.get('/professores', filtrarProfessores)

app.get('/professores/:id', encontrarProfessor)

app.listen(3000);