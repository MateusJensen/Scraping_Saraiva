const express = require('express');
const bodyParser = require('body-parser');
const { rodarRobo } = require('./choice.js');
const { Robo} = require('./coment.js');
const { request } = require('http');
const app = express();

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

app.post('/livros', (request, response) => {
  var {
    LIVRO,
    CATEGORIA
  } = request.body

  var retorno = new Promise(async (resolve) => {
    resolve(await rodarRobo(LIVRO, CATEGORIA))
  })

  retorno
    .then((e) => {
      response.status(200).send(e);
    })
});

app.post('/comentarios', (request, response)=>{

  var{
    livro
  } = request.body

  var retorno = new Promise(async (resolve) => {
    resolve(await Robo(livro))
  })

  retorno
    .then((e) => {
      response.status(200).send(e);
    })
});

app.listen(4000, () => {
  console.log('Server rodando!');
});