document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastro-form');
    const livrosTable = document.getElementById('livros-table');
    const buscarLivrosBtn = document.getElementById('buscar-livros');
  
    cadastroForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      //chamar a API para cadastrar o usuário
      fetch('/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Usuário cadastrado:', data);
        //limpar os campos do formulário
        cadastroForm.reset();
      })
      .catch(error => {
        console.error('Erro ao cadastrar o usuário:', error);
      });
    });
  
    buscarLivrosBtn.addEventListener('click', () => {
      //chamar a API para obter a lista de livros
      fetch('/livros')
        .then(response => response.json())
        .then(data => {
          console.log('Livros encontrados:', data);
          //renderizar os dados na tabela
          renderizarLivros(data);
        })
        .catch(error => {
          console.error('Erro ao buscar os livros:', error);
        });
    });
  
    function renderizarLivros(livros) {
      const tbody = livrosTable.querySelector('tbody');
      tbody.innerHTML = '';
  
      livros.forEach(livro => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${livro.isbn}</td>
          <td>${livro.nome}</td>
          <td>${livro.editora}</td>
          <td>${livro.ano_publicacao}</td>
        `;
        tbody.appendChild(row);
      });
    }
  });