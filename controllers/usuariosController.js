const db = require('../database');

//obter todos os usuários
exports.obterUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, result) => {
    if (err) {
      console.error('Erro ao obter os usuários:', err);
      res.status(500).send('Erro ao obter os usuários');
    } else {
      res.json(result.rows);
    }
  });
};

//criar usuário novo
exports.criarUsuario = (req, res) => {
  const { username, password } = req.body;

  db.query(
    'INSERT INTO usuarios (username, password) VALUES ($1, $2) RETURNING *',
    [username, password],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar o usuário:', err);
        res.status(500).send('Erro ao criar o usuário');
      } else {
        res.status(201).json(result.rows[0]);
      }
    }
  );
};