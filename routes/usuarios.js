const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// obter todos os usuários
router.get('/', usuariosController.obterUsuarios);

//criar um novo usuário
router.post('/', usuariosController.criarUsuario);

module.exports = router;