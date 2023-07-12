const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

//obter todos os livros
router.get('/', livrosController.obterLivros);

//criar livro novo
router.post('/', livrosController.criarLivro);

module.exports = router;