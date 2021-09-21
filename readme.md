# SCRAPING SARAIVA

    Uma apliacação simples para realzar consultas dentro do site Saraiva.
                         
🛠️ Construído -- Construido com Node JS.

✒️ Autores -- Mateus Jensen | Moyando

📄 Licença -- Este projeto está sob a licença (MIT).

        UTILIZAÇÃO

1 - Faça o download do repositório;

2 - Para que API desta aplicação fique online, com VSCODE ou editor de código de sua preferência execute o arquivo API.js;

3 - Para que as consultas sejam realizadas será necessário o download do Postman, um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs;

4 - Para que um dos dois tipos de consultas sejam realizados é necessário atribuir ao método POST dentro app Postman um body com o objeto de requisição abaixo:

  1° ---> Devolve três livros com base no filtro de pesquisa escolhido (1 = Mais vendidos) & (2 = Maior desconto)
  
       Rota/url -> http:localhost:4000/livros
  
      {
        "LIVRO": "Nome do livro vai aqui",
        "CATEGORIA": (1 ou 2)
      }
      
  2° ---> Devolve três comentários sobre o livro que deseja pesquisar. Caso não haja comentários apenas retornará undefined.
      
       Rota/url -> http:localhost:4000/comentarios
       
      {
        "livro": "Nome do livro vai aqui"
      }
