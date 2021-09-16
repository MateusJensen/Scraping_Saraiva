              Scraping Saraiva -- Uma apliacação simples para realzar consultas dentro do site Saraiva.
                         
🛠️ Construído -- Construido com Node JS.

✒️ Autores -- Mateus Jensen | Moyando

📄 Licença -- Este projeto está sob a licença (MIT).

        Utilização

Para utilizar a aplicação segue instruções de uso abaixo:

1 - Faça a download do repositório;

2 - Para que a API fique online, com VSCODE ou editor de código de sua preferência execute o arquivo api.js;

3 - Para que alguma consulta seja realizada irá ser necessário o download do Postman que é é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs;

4 - Para que um dos dois tipos de consultas sejam realizados é necessário atribuir ao método POST no app Postman um body com o objeto de requisição abaixo:

  1° BODY ---> Devolve três livros com base no filtro de pesquisa escolhido (1 = Mais vendidos) & (2 = Maior desconto)
  
      {
        "LIVRO": "Nome do livro vai aqui",
        "CATEGORIA": (1 ou 2)
      }
      
  2° BODY ---> Devolve três comentários sobre o livro que deseja pesquisar. Caso não haja comentários apenas retornará undefined.
  
      {
        "livro": "Nome do livro vai aqui"
      }
