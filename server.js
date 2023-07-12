const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.static('public'));

app.use(bodyParser.json());

//rotas livro
const livrosRoutes = require('./routes/livros');
app.use('/livros', livrosRoutes);

//rotas para user
const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

//inicializa server
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});