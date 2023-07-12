const db = require('../database');

//obter todos livros
exports.obterLivros = (req, res) => {
  db.query('SELECT * FROM livros', (err, result) => {
    if (err) {
      console.error('Erro ao obter os livros:', err);
      res.status(500).send('Erro ao obter os livros');
    } else {
      res.json(result.rows);
    }
  });
};

//criar livro novo
exports.criarLivro = (req, res) => {
  const { isbn, nome, editora, ano_publicacao } = req.body;

  db.query(
    'INSERT INTO livros (isbn, nome, editora, ano_publicacao) VALUES ($1, $2, $3, $4) RETURNING *',
    [isbn, nome, editora, ano_publicacao],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar o livro:', err);
        res.status(500).send('Erro ao criar o livro');
      } else {
        res.status(201).json(result.rows[0]);
      }
    }
  );
};